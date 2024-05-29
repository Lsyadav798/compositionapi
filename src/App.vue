<template>
 <div>

<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div>
  <router-view></router-view>
</div>
    </div>
  </div>
</div>

 

  <!-- <h3>{{ fullName }}</h3> -->
  <!-- <div style="margin-top: 30px;">
<input type="text" placeholder="First Name" @input="changeFirstName"/>&nbsp;
<input type="text" placeholder="Last Name" @input="changeLastName"/>
  </div> -->
   <!-- <h3>{{ fullName }}</h3>
   <h3>{{ age }}</h3>
   <button @click="changeAge">Change Age</button>
<div style="margin-top: 30px;">
  <input type="text" placeholder="First Name" v-model="firstName"/>&nbsp;
  <input type="text" placeholder="Last Name" v-model="lastName"/>
</div> -->
  

  <!-- <div>
    <h2>UserDetails</h2>
    <h3>{{ userDetails.name }}</h3>
    <h3>{{ userDetails.age }}</h3>
    <button @click.prevent="changeName">ChangeName</button>
  </div> -->
  <!-- <AboutCom/> -->
  <!-- <contactCom/> -->
 </div>
</template>

<script>
// import TheNavigation from './components/TheNavigation.vue';
// import AboutCom from './components/AboutCom.vue'
// import ContactCom from './components/ContactCom.vue'
import {ref,reactive,computed,watch}from 'vue'


export default {
  components: {

    // ContactCom,
    // AboutCom
    // TheNavigation
  },
  name: 'App',
    setup(){
      let name = ref('Ls yadav');


// computed property
      // let firstName = ref('')
      // let lastName = ref('')
      let age = ref(30)
      let firstName = ref('')
      let lastName = ref('')

     function changeAge(){
      age.value = 100
     }

      watch([age],(newValue,oldValue)=>{
         console.log(newValue)
         console.log(oldValue)
      })
     const fullName = computed(()=>{
        return firstName.value+ " " +lastName.value
      })
      // reactive methods
      let userDetails = reactive({
        name:"kishore",
        age:26
      });
  // change Name
  function changeName(){
        userDetails.name = 'modifies Kishore'
      }

      // computed property
      // function changeFirstName(event){
      //   firstName.value = event.target.value
      // }

      // function changeLastName(event){
      //   lastName.value = event.target.value
      // }
    
     
    // setTimeout(()=>{
    //   name.value = 'Frontend Developer'
    //   userDetails.name = 'modified name kishore'
    //   userDetails.age = 30
    // },3000);

    return{
        userName:name,
        userDetails,
        changeName,
        // changeFirstName,
        // changeLastName,
        fullName,
        computed,
        firstName,
        lastName,
        age,
        changeAge,
        watch
      };
    }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
