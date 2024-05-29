<template>
    <div>
        <h2>contact Component</h2>
        <h3>componnet component</h3>
        <button @click="goToAboutPage">Go tO About Page</button>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
export default{
    setup(){

         const router = useRouter()
        function goToAboutPage(){
         router.push('./about-com')
        }
        return {
            goToAboutPage
        }
    }
}
</script>