import React, {KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormControls/FormControls";
import {addPost} from "../../../redux/profile-reducer";

// types
type FormDataType = {
    newPostText: string
}

// component
export const MyPosts = React.memo((props: MyPostsType) => {
    let postsElements = [...props.posts].reverse().map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addNewPost = (values: FormDataType) => {
        if (values.newPostText.trim() !== '') {
            props.addPost(values.newPostText.trim())
            values.newPostText = ''
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={addNewPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const maxLength30 = maxLengthCreator(30)

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const onClickHandler = () => {

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickHandler()
        }
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} placeholder={'Enter your post'} validate={[required, maxLength30]} onKeyPress={onKeyPressHandler} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<FormDataType>({form: 'profileAddPostForm'})(AddPostForm)

