import React, {useState} from "react";
import s from './Paginator.module.css';
import cn from 'classnames'
import {Button} from "../Button/Button";

// types
export type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage?: number
    onCurrentPageChanged?: (currentPage: number) => void
    portionSize?: number
}

// component
export const Paginator: React.FC<PaginatorPropsType> = ({totalItemsCount, currentPage= 1, onCurrentPageChanged= x => x, pageSize, portionSize= 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={cn(s.paginator)}>
            { portionNumber > 1 &&
                <Button classname={s.buttonSecondary} name={'Prev'} onClick={() => { setPortionNumber(portionNumber - 1)
                }}/>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span className={cn({
                    [s.selectedPage]: currentPage === p
                }, s.pageNumber) }
                             key={p}
                             onClick={() => {
                    onCurrentPageChanged(p)
                }}>{p}</span>
            })}
            { portionCount > portionNumber &&
                <Button name={'Next'} onClick={() => { setPortionNumber(portionNumber + 1)
                }} />
            }
        </div>
    )
}
