import {all, call, delay, race, takeEvery} from "typed-redux-saga";

function*
userWatcher() {
    yield takeEvery("user/attemptLogin", attemptLoginSaga);
}

type ApiResponseType = {
    data: any; // You can specify the actual data type here
};

function* attemptLoginSaga(action: any) {
    const {user, timeout}: { user: ApiResponseType; timeout: boolean } = yield race({
        user: call(fetchUser),
        timeout: call(timeoutSaga),
    });
    if (user) {
        console.log('User fetched:', user);
    } else if (timeout) {
        console.log('Fetching user timed out', timeout);
    }
}

function* fetchUser() {
    yield delay(2000);
    try {
        console.log('========fetchUser complete=======')
        return 'from fetchUser';
    } catch (error) {
        console.log('=====fetchUser failed==========')
    }
}

function* timeoutSaga()
{
    yield delay(3000);
    console.log('=====timeoutSaga executed==========');
    return 'from timeoutSaga';
}

// function* fetchResource(resource: string): Generator<ForkEffect<any>, void, any> {
//     console.log("=====fetchResource=====")
// }
//
// function* fetchResourceTwo(resource: string): Generator<ForkEffect<any>, void, any> {
//     console.log("=====fetchResourceTwo=====")
// }

export default function* userSaga() {
    yield all([userWatcher()])
}
