
import { ChatPageType } from "../api/chat-api";
/*

let initialState = {
    message: [] as ChatPageType[]
};

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/chat/MESSAGE_RECIVED':
            return {
               
                [...state, ...action.payload.message]
            }
        default:
            return state;
    }
}

export const actions = {
   messageReacuved: (message: string) => ({
        type: 'SN/chat/MESSAGE_RECIVED', payload: {message}
    } as const)
  

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me()
    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}


export default chatReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
*/