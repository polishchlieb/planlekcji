<template>
    <div id="app">
        <time-table :data="data"></time-table>
        <new-lesson-modal v-if="modalOpen"></new-lesson-modal>
        <div style="clear: both"></div>
        <lesson-modal v-if="selected"></lesson-modal>

        <input type="text" v-model="tableId"> <button @click="load(tableId)">no dawaj ruski</button><br>
        <button @click="share()">udostepnij innym ruskom</button><br><br>
        <h1>{{ code }}</h1>
    </div>
</template>

<script>
import Vuex from 'vuex';

import TimeTable from './components/TimeTable.vue';
import NewLessonModal from './components/NewLessonModal.vue';
import LessonModal from './components/LessonModal.vue';

export default {
    name: 'App',
    data: () => ({
        tableId: '',
        code: ''
    }),
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
    methods: {
        load(id) {
            fetch(`/timetables/${id}`)
                .then(res => res.json())
                .then(res => this.$store.commit('loadTimetable', res));
        },
        share() {
            fetch('/timetable', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.$store.state.timetable)
            })
                .then(res => res.text())
                .then(res => this.code = res);
        }
    },
    components: {
        TimeTable, NewLessonModal, LessonModal
    }
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
