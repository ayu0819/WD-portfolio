import * as Actions from './actions';
import initialState from '../store/initialState';

// UsersReducer
export const UsersReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case Actions.SIGN_IN:
            return {
                ...state,
                ...action.payload
            }
            case Actions.SIGN_OUT:
            // 初期状態に戻す
            return {
                ...action.payload
            };
            default:
                return state
    }
}
