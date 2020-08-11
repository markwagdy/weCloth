import cartActiontypes from './cart.type';
import cartActionTypes from './cart.type';
const InITIAL_STATE={
    hidden:true
};
const cartReducer=(state=InITIAL_STATE,action)=>
{
    switch(action.type)
    {
        case cartActionTypes.TOGGLE_INTIAL_STATE:
            return{
                ...state,
                hidden:!state.hidden
            };
            default:
                return state;
    }

}
export default cartReducer;