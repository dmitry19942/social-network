import React from "react";
import s from './Paginator.module.css';


export type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onCurrentPageChanged: (currentPage: number) => void

}

export const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span key={p.toString()} onClick={() => {
                    props.onCurrentPageChanged(p)
                }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
            })}
        </div>
    )
}
