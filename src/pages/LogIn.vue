<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
        <div>
            <h3>LogIn {{ firstName }}</h3>
            <hr/>
        </div>
    <form @submit.prevent="onLogin">
        <div class="form-group">
            <label>Email</label>
            <input  type="text" class="form-control" v-model="email"/>
            <div class="error" v-if="error.email">{{ error.email }}</div>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input  type="password" class="form-control" v-model="password"/>
            <div class="error" v-if="error.password">{{ error.password }}</div>
        </div>

        <div class="my-3">
<button type="submit" class="btn btn-primary">LogIn</button>
        </div>
    </form>
    </div>
        </div>
    </div>
   
</template>

<script>
import signupValidations from '../services/signupValidations'
// import {mapState} from 'vuex'
export default {
    // computed:{
    //     ...mapState('auth',{
    //        firstName: (state) => state.name
    //     })
    // }
    data(){
        return{
            email:'',
            password:'',
            error:[]
        }
    },
    methods:{
        onLogin(){
         let Validations = new signupValidations(
            this.email,this.password
            );
            this.error = Validations.checkValidations()
            if(this.error.length){
                return false
            }
        }
  
    }
}
</script>
<style scoped>
.error{
 color: red;
}
</style>




