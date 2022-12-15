import * as types from "./action.types";

const initialState = {
    user:"",
    token:"",
    isAuth:false,
    isLoding:false,
    isError:false

}

export const reducer = (state=initialState, action)=>{
    const{type, payload} = action;
    console.log(payload, "payload");
    switch(type){
        case types.LOGIN_USER_REQUEST:
            return {...state, isLoding:true, isError:false};

            case types.LOGIN_USER_SUCCESS:
                return {...state, isLoding:false, isError:false, isAuth:true, token:payload.token, user:payload.userLogin.Name}
            

            case types.LOGIN_USER_FAILURE:
                return {...state, isLoding:false, isError:true, isAuth:false}
        default:return state;
    }
}