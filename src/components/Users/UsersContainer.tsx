import {useSelector} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {getIsFetching} from "../../redux/users-selectors";

// component
export const UsersPage: React.FC = () => {
    const isFetching = useSelector(getIsFetching)
        return <>
            {isFetching ? <Preloader/> : null}
            <Users />
        </>
}


