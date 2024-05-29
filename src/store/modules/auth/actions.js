// import { SIGNUP_ACTION } from "../../store/storeconstance";
import { SET_USER_TOKEN_DATA_MUTATIONS, SIGNUP_ACTION } from "@/store/storeconstance";
import axios from 'axios';

export default{

  
   async [SIGNUP_ACTION](context,payload){

        let postData = {
        email:payload.email,
        password:payload.password,
        returnSecureToken:true
        }
   let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYEga1NsDAn1LCMp-EXCTeKHWEvqj_vdY
   ` ,
     postData)

  if(response.status ===200){
    context.commit(SET_USER_TOKEN_DATA_MUTATIONS,{
        email:response.data.email,
        toekn:response.data.idToken,
        expiresIn:response.data.expiresIn,
        refreshToken:response.data.refreshToken,
        userId:response.data.localId
    })
     
  }
    }
};