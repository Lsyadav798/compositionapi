<template>
 <div id="app">
<h1>Fetching data from Axios</h1>

<ul v-for="item in responseData" :key="item.id">
   <span> <li >
        {{ item.title }}
    </li>
</span>

<span> <li>{{ item.id }}</li></span>
   
</ul>
 </div>
</template>
<script>
import axios from 'axios'
import {ref,onMounted} from 'vue'

export default{
    setup(){

        const responseData = ref([])

         onMounted(()=>{
            fetchData();
         });

        const fetchData = async ()=>{
            try{
                const response = await  axios.get('https://jsonplaceholder.typicode.com/posts')
                responseData.value = response.data;
            }
            
            catch(error){
                console.log('Fetching data error',error)
            }
        }

        return {
            responseData
        }
    }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>