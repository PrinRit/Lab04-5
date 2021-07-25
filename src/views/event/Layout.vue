<template>
  <div v-if="passenger">
    <h2>Details of {{ passenger.name }}</h2>
    <div id="nav">
      <router-link :to="{ name: 'Passenger', params: { _id } }">
        Passenger
      </router-link>
      |
      <router-link :to="{ name: 'Airline', params: { _id } }">
        Airline
      </router-link>
    </div>
    <router-view :passenger="passenger" />
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["id"],
  data() {
    return {
      passenger: null,
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.passenger = response.data;
      })
      .catch(() => {});
  },
};
</script>