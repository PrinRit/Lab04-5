<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
//import space
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
export default {
  name: 'EventList',
  props:{
    page: {
      type: Number,
      required: true
    },
    perPage: {
      type:Number,
      required: true
    }
  },
  components: {
    EventCard // register it as a child component
  },
  data() {
    return {
      events: null,
      totalEvent:0,//<--Add this to store totalEvents
    }
  },
  // created() {
  //     EventService.getEvents(10,0)
  //       .then((response) => {
  //         this.events = response.data.data
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  // },
   beforeRouteEnter(routeTo, routeFrom, next){
    EventService.getEvents(10, parseInt(routeTo.query.page)||0)
    .then((response)=>{
      next((comp)=>{
        comp.events = response.data.data
        comp.totalEvents = response.headers['x-total-count']
      })
    })
    .catch(()=>{
      next({name: 'NetworkError'})
    })
  },
  beforeRouteUpdate(routeTo,routeFrom,next){
    EventService.getEvents(10,parseInt(routeTo.query.page)||0)
    .then((response)=>{
      this.events = response.data.data //<----
      this.totalEvents = response.headers['x-total-count'] //<----
      next() //<----
    })
    .catch(()=>{
      next({name: 'NetworkError'})
    })
  }
}

</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination{
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev{
  text-align: left;
}

#page-next{
  text-align: right;
}

#limits{
  text-align: center;
}
</style>
