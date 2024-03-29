import {addPost, PostsType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// types
type MapStateToPropsType = {
    posts: PostsType[]
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}
export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType

// container
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPost(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)