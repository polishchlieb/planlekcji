<template>
    <div id="app">
        <time-table :data="data"></time-table>
        <new-lesson-modal v-if="modalOpen"></new-lesson-modal>
        <div style="clear: both"></div>
        <lesson-modal v-if="selected"></lesson-modal>
    </div>
</template>

<script>
import Vuex from 'vuex';

import TimeTable from './components/TimeTable.vue';
import NewLessonModal from './components/NewLessonModal.vue';
import LessonModal from './components/LessonModal.vue';

export default {
    name: 'App',
    computed: {
        data() {
            return this.$store.state.timetable;
        },
        modalOpen() {
            return this.$store.state.newModalOpen;
        },
        id() {
            return this.$store.state.id;
        },
        selected() {
            return this.$store.state.selected;
        }
    },
    components: {
        TimeTable, NewLessonModal, LessonModal
    },
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.modal {
    position: absolute;
    padding: 20px;
    background: white;
}
</style>
