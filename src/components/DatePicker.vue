<template>
    <div>
<h1>Hello Date Picker</h1>
<div class="container">
  <div class="sa-date-picker">
  <VueDatePicker ></VueDatePicker>
</div>
</div>

    </div>
</template>
<script>
// import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  components: { VueDatePicker },
  setup() {
  

    return {
      // date
    }
  }
};
</script>
<style scoped>
.sa-date-picker{
  width: 20%;
    padding: 10px;
    margin-left: auto;

}
</style>