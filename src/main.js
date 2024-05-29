import { createApp } from 'vue';
import App from './App.vue';
import {createRouter,createWebHistory} from 'vue-router'
// import router from '/router'
import AboutCom from './components/AboutCom.vue';
import ContactCom  from './components/ContactCom.vue';
import DatePicker from './components/DatePicker.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import FetchingData from './components/FetchingData.vue';
import FetchingState from './components/FetchingState.vue';
import SignUp from './pages/SignUp.vue';
import LogIn from './pages/LogIn.vue';
import store from './store/store';
import DataEmpty from './components/DataEmpty.vue';


const router = createRouter({
	history: createWebHistory(),

  routes:[
    {path:'/about-com',component:AboutCom,},
    {path:'/contact-com', component:ContactCom,},
    {path:'/date-picker',component:DatePicker,},
    {path:'/fetching-data',component:FetchingData,},
    {path:'/fetching-state',component:FetchingState,},
    {path:'/login',component:LogIn},
    {path:'/signup',component:SignUp},
    {path:'/data-empty',component:DataEmpty}

  ]

})

 const app = createApp(App);
 app.use(router);
 app.use(store);
 app.mount('#app');
 app.component( VueDatePicker);
 
