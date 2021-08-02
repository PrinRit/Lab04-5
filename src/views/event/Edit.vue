<template>
  <p>Edit the passenger here</p>
  <button @click="edit">Edit Me</button>
</template>

<script>
export default {
  props: ['passenger'],
  inject:['GStore'],
  methods:{
    edit(){

      this.GStore.flashMessage = 
      'You are successfully editted for ' + this.passenger.title
      setTimeout(() =>{
        //After 5 seconds remove it
        this.GStore.flashMessage = ''
      }, 3000)

      this.$router.push({
        name:'Home',
        params: {id: this.passenger.id}
      })
    }
  }
}
</script>
