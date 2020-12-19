export const initialState ={
    user:null,
};

export const actionsTypes = {
    SET_USER:"SET_USER",
};

const reducer = (state, action)=>{
    console.log(action);
    switch(action.type){
        case actionsTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;    
    }
};

export default reducer;