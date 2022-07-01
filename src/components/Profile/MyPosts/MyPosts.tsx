import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionTypes, addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


export type  PostsType = {
    id: number
    message: string
    likesCount: number
}

export type MyPostsPageType = {
    posts: Array<PostsType>
    dispatch: (action: ActionTypes) => void
    newPostText: string
}

export function MyPosts(props:MyPostsPageType) {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator())
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            let action = updateNewPostTextActionCreator(text)
            props.dispatch(action)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}