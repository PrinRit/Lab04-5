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

      this.GStore.flash_edit = 
      'You are successfully editted for ' + this.event.title
      setTimeout(() =>{
        //After 3 seconds remove it
        this.GStore.flash_edit = ''
      }, 3000)

      this.$router.push({
        name:'EventDetails',
        params: {id: this.event.id}
      })
    }
  }
}
</script>
