import {createRouter,createWebHistory} from 'vue-router'
import AboutCom from './components/AboutCom.vue';
import ContactCom  from './components/ContactCom.vue';
import DatePicker from './components/DatePicker.vue'
import FetchingData from './components/FetchingData.vue'
import FetchingState from './components/FetchingState.vue'
import LoginPage from './components/LoginPage.vue'


const router = createRouter({
	history: createWebHistory(),
    routes,
    routes = [
        { path:'/about-com', component:AboutCom},
       {path:'/contact-com', component:ContactCom},
      {path:'/date-picker',component:DatePicker},
      { path:'/fetching-data', component:FetchingData},
      {path:'/fetching-state',component:FetchingState},
      {path:'/log-in',components:LoginPage}
      ]
})
export default router
