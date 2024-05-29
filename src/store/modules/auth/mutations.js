import { SET_USER_TOKEN_DATA_MUTATIONS } from "@/store/storeconstance";

export default {
    [SET_USER_TOKEN_DATA_MUTATIONS](state,payload){
        state.email = payload.email,
        state.toekn = payload.idToken
        state.expiresIn = payload.expiresIn
        state.refreshToken = payload.refreshToken
        state.userId = payload.localId

    }
};