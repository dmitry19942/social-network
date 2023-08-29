import {follow, InitialStateType, unfollow, usersReducer} from "./users-reducer";

let state: InitialStateType

beforeEach(() => {
    state = {
        users: [
            {id: 0, name: 'Valera', status: 'status 0', followed: false, photos: {small: null, large: null} },
            {id: 1, name: 'Valera 1', status: 'status 1', followed: false, photos: {small: null, large: null} },
            {id: 2, name: 'Valera 2', status: 'status 2', followed: true, photos: {small: null, large: null} },
            {id: 3, name: 'Valera 3', status: 'status 3', followed: true, photos: {small: null, large: null} },
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
        filter: {
            term: '',
            friend: null
        }
    }
})

test('follow success', () => {

    const newState = usersReducer(state, follow(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test('unfollow success', () => {

    const newState = usersReducer(state, unfollow(3))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})


