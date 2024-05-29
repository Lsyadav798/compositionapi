<template>
    <div>
        <h2>About Component</h2>
        <h3>About comonent</h3>
        <button @click="goToContact">got to contactCom page</button>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
export default{
    setup(){
        const router = useRouter();
        function goToContact(){
            router.push('./contact-com')
        }
        return {
            goToContact,

        }
    }
}
</script>