import React, {useState} from "react";
import s from './Paginator.module.css';
import cn from 'classnames'

// types
export type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onCurrentPageChanged: (currentPage: number) => void
    portionSize: number
}

// component
export const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div className={cn(s.paginator)}>
            { portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1)
            }}>PREV</button> }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span className={cn({
                    [s.selectedPage]: props.currentPage === p
                }, s.pageNumber) }
                             key={p}
                             onClick={() => {
                    props.onCurrentPageChanged(p)
                }}>{p}</span>
            })}
            { portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1)
                }}>NEXT</button> }
        </div>
    )
}
