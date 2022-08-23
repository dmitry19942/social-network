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
            <img src="https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka.jpg" alt=''/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}