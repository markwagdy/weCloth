import {userActionTypes} from './user.types';
const Intiall_State={
currentUser:null
};
const userReducer=(state =Intiall_State,action)=>{
    switch(action.type)
    {
        case userActionTypes.SET_CURRENT_USER:
        return {
            ...state,
            currentUser:action.payload
        };
        default:
        return state;

    }

};
export default userReducer;