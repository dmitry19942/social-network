import React from "react";
import {UsersType} from "../../redux/users-reducer";


type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

export const Users = (props: UsersPropsType) => {

    if(props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://www.nobelprize.org/images/125646-portrait-medium.jpg', followed: false, fullName: 'Dmitry Harustovich', status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Valery_Karpin_Rostov.jpg', followed: true, fullName: 'Valery Karpin', status: 'I am best', location: {city: 'Kiev', country: 'Ukraine'}},
            {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Zbigniew_Rau.jpg', followed: false, fullName: 'Zbigniew Swiderski', status: 'I am great', location: {city: 'Krakow', country: 'Poland'}},
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} style={{width: 150}} alt=''/>
                    </div>
                    <div>
                        { u.followed ?
                            <button onClick={()=> {props.unfollow(u.id)}}> Unfollow</button> :
                            <button onClick={()=> {props.follow(u.id)}}> Follow</button> }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }

    </div>
}
