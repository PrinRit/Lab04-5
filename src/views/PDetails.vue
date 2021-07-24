<template>
    <div v-if="passenger">
        <h1>Passenger Details </h1>
        <br>
        <h4>Name: {{passenger.name}}</h4>
        <h4>Trips: {{passenger.trips}}</h4>
    </div>
</template>

<script>
import EventService from '@/services/EventService.js'
    export default {
        props:['id'],
        data() {
            return {
                passenger:null,
            }
        },
        created() {
            EventService.getEvent(this.id)
                .then(response => {
                    this.passenger = response.data
                    console.log(this.id)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>