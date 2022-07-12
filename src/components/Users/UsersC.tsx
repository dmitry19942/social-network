import React from "react";
import userPhoto from "../../assets/images/user.jpg";
import axios from "axios";
import {AppRootStateType} from "../../redux/redux-store";
import s from './users.module.css'
import {UserType} from "../../redux/users-reducer";


export type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (totalCount: number) => void
}


export class Users extends React.Component<UsersPropsType, AppRootStateType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setUsersTotalCount(res.data.totalCount)
            })
    }

    onCurrentPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        // let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= 10 ; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span onClick={()=> {this.onCurrentPageChanged(p)}} className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                })}

            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt=''/>
                    </div>
                    <div>
                        { u.followed ?
                            <button onClick={()=> {this.props.unfollow(u.id)}}> Unfollow</button> :
                            <button onClick={()=> {this.props.follow(u.id)}}> Follow</button> }

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>)
            }

        </div>
    }
}



