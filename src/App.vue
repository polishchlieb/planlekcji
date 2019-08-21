<template>
    <div id="app">
        <time-table></time-table>
    </div>
</template>

<script>
import TimeTable from './components/TimeTable.vue';

export default {
    name: 'App',
    components: {
        TimeTable
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
