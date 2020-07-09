const Intiall_State={
currentUser:null
};
const userReducer=(state =Intiall_State,action)=>{
    switch(action.type)
    {
        case 'SET_CURRENT_USER':
        return {
            ...state,
            currentUser:action.payload
        };
        default:
        return state;

    }

};
export default userReducer;