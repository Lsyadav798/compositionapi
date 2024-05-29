import useValidations from "./useValidations";

export default class signUpValidations {
    constructor(email,password){
        this.email = email,
        this.password = password
    }
    checkValidations(){
        let error = []; 
        if(!useValidations.checkEmail(this.email)){
            error ['email'] = 'Invalid Email'
        }

        if (!useValidations.minLength(this.password,6)){
            error ['password'] = 'Password Should Be 6Chanracters'
        }
        return error
    }
}