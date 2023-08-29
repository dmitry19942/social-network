import React from "react";
import s from './Post.module.css';

// types
type PostType = {
    message: string
    likesCount: number
}

// component
export function Post(props: PostType) {
    return (
        <div className={s.item}>
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png" alt=''/>
            {props.message}
            <div>
                <span className={s.like}>like:</span> {props.likesCount}
            </div>
        </div>
    )
}