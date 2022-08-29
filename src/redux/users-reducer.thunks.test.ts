import {follow, followThunkCreator, toggleIsFollowingProgress, unfollow, unFollowThunkCreator} from './users-reducer'
import {APIResponseType, ResultCodesEnum} from '../api/api'
import {userAPI} from "../api/users-api";

jest.mock('../api/users-api')
const userAPIMock = userAPI as jest.Mocked<typeof userAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    userAPIMock.postFollow.mockClear();
    userAPIMock.deleteFollow.mockClear();
})

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    fieldsErrors: [],
    data: {}
}

userAPIMock.postFollow.mockReturnValue(Promise.resolve(result));
userAPIMock.deleteFollow.mockReturnValue(Promise.resolve(result));


test('success follow thunk', async () => {
    const thunk = followThunkCreator(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, follow(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleIsFollowingProgress(false, 1))
})

test('success unfollow thunk', async () => {
    const thunk = unFollowThunkCreator(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, unfollow(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleIsFollowingProgress(false, 1))
})