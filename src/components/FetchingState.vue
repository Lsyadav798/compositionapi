<template>
    <div id="app">
        <h1>Fetching from API:</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <!-- <ul>
        <li v-for="item in responseData" :key="item.id">{{ responseData }}</li>
      </ul> -->
      <table>
       
            <tr>
                <th>User Id</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            
           <tr v-for="item in responseData" :key="item">
            <td>{{ item.userId }}</td>
            <td>{{item.id}}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
           </tr>
         
            
      
      </table>
    </div>
    <div v-if="error">{{ error }}</div>
    </div>
</template>

<script>
import {defineComponent,ref,onMounted}from 'vue';
import axios from 'axios';

export default defineComponent({
    setup(){
        const responseData = ref([]);
        const loading = ref(false);
        const error= ref('')


        const fetchData = async  () => {
            loading.value = true
            try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            responseData.value = response.data
        }
        catch(error){
            error.value = 'Fetching data error'
        }
        finally{
            loading.value = false
        }
        }
       
       

        onMounted(()=>{
            fetchData();
        });

        return {
        responseData,
        loading,
        error

    }
    }
});

   

   

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
table,th,td{
    border: 1px solid black;
    border-collapse: collapse;
}
</style>