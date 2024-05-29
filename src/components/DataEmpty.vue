<template>
  <div>
    <!-- Button is only rendered if data is not empty -->
    <button v-if="data.length > 0 || data.length <0" @click="handleClick">Click me</button>
    
    <div v-if="data.length === 0">
      No data available
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        name:"email",
        phone:910038872,
        age:26
      }] // Your data here
    };
  },
  methods: {
    handleClick() {
      // Handle the click event
      console.log('Button clicked');
    }
  }
};
</script>