<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
        <div>
            <h3>SignUp</h3>
            <hr/>
        </div>
    <form @submit.prevent="onSignup">
        <div class="form-group">
            <label>Name</label>
            <input  type="text" class="form-control" v-model.trim="name"/>
            <div class="error" v-if="error.name">{{ error.name }}</div>
        </div>
        <div class="form-group">
            <label>Email</label>
            <input  type="text" class="form-control" v-model.trim="email"/>
            <div class="error" v-if="error.email">{{ error.email }}</div>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input  type="password" class="form-control" v-model.trim="password"/>
            <div class="error" v-if="error.password">{{ error.password }}</div>
        </div>

        <div class="my-3">
<button type="submit" class="btn btn-primary" @click="signUpData">SignUp</button>
        </div>
    </form>
    </div>
        </div>
    </div>
   
</template>

<script>
import axios from 'axios'
import signupValidations from '../services/signupValidations';
import {mapActions} from 'vuex';
import {SIGNUP_ACTION} from '../store/storeconstance'
export default{
data(){
    return{
        name:"",
        email:"",
       password:"",
       error:[]
    }
},
methods:{
  async  signUpData(){
// console.log('SignUp Here', this.name,this.email,this.password)
let result = await axios.post("http://localhost:3000/user",{
    name:this.name,
    email:this.email,
    password:this.password
});

console.log(result)
if(result.status==201){
    alert("sign-up-done")
    localStorage.setItem("user-info",JSON.stringify(result.data))
}

    },
    ...mapActions('auth',{
        signup:SIGNUP_ACTION
    }),
    onSignup(){
        let Validations = new signupValidations(
            this.email,this.password
            );
            this.error = Validations.checkValidations()
            if('email' in this.error || 'password' in this.error){
                return false
            }
            this.signup({email: this.email, password:this.password} )
    },
   
}
}
</script>
<style scoped>
.error{
    color: red;
}
</style>
