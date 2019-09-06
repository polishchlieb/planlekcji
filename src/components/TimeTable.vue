<template>
    <div class="timetable">
        <day v-for="(day, i) in data.days" :key="i" :day="day"></day>
    </div>
</template>

<script>
import Vuex from 'vuex';
import Day from './Day.vue';

export default {
    name: 'TimeTable',
    props: ['data'],
    components: {
        Day
    }
}
</script>

<style>

</style>