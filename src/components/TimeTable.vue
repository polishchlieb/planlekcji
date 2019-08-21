<template>
    <div>
        <Day v-for="(day, i) in days" :key="i"></Day>
    </div>
</template>

<script>
import Day from './Day.vue';
import Vuex from 'vuex';

export default {
    name: 'TimeTable',
    data() {
        return {
            days: this.$store.state.timetable
        };
    },
    components: {
        Day
    }
}
</script>

<style>

</style>