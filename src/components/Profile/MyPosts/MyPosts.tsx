import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionTypes, addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


export type  PostsType = {
    id: number
    message: string
    likesCount: number
}

export type MyPostsPageType = {
    posts: Array<PostsType>
    addPost: () => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

export function MyPosts(props:MyPostsPageType) {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}