<template>
    <b>Name: </b>
    <span>{{passenger.name}}</span>
    <br>
    <br>
    <b>Trips: </b>
    <span>{{passenger.trips}}</span>
</template>

<script>

export default {
    props:['passenger'],
}
</script>