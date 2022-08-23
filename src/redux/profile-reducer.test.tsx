import {addPost, deletePost, profileReducer} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 25},
        {id: 3, message: 'Blablabla', likesCount: 15},
        {id: 4, message: 'Valera is the best', likesCount: 9}
    ],
    profile: null,
    status: ''
}


test('check post added', () => {
    // 1. test data
    let action = addPost('Dmitry is the best')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(5)
    expect(newState.posts[4].message).toBe('Dmitry is the best')
    expect(newState.posts[4].likesCount).toBe(0)
})

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3)
})

test(`after deleting length shouldn't  be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(100)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(4)
})