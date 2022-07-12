import React from "react";
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg';
import { UsersPropsType } from "./UsersC";




export const Users = (props: UsersPropsType) => {

    let getUsers = () => {

    if(props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            props.setUsers(res.data.items)
        })
    }

        // props.setUsers([
        //     {id: 1, photoUrl: 'https://www.nobelprize.org/images/125646-portrait-medium.jpg', followed: false, fullName: 'Dmitry Harustovich', status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
        //     {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Valery_Karpin_Rostov.jpg', followed: true, fullName: 'Valery Karpin', status: 'I am best', location: {city: 'Kiev', country: 'Ukraine'}},
        //     {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Zbigniew_Rau.jpg', followed: false, fullName: 'Zbigniew Swiderski', status: 'I am great', location: {city: 'Krakow', country: 'Poland'}},
        // ])
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} style={{width: 150}} alt=''/>
                    </div>
                    <div>
                        { u.followed ?
                            <button onClick={()=> {props.unfollow(u.id)}}> Unfollow</button> :
                            <button onClick={()=> {props.follow(u.id)}}> Follow</button> }

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
