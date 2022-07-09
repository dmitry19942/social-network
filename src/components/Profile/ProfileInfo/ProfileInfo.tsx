import React from "react";
import s from './ProfileInfo.module.css';


export function ProfileInfo() {
    return (
    <div>
        <div>
            <img className={s.img}
                src='https://www.study.ru/uploads/server/jqMeRR0Fw70d5uNi.jpg' alt='' />
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
    )
}