<template>
    <div class="day">
        <b>
            {{ day.name }}
        </b>

        <lesson v-for="(lesson, i) in day.lessons" :key="i" :lesson="lesson"></lesson>
        <div @click="openModal()" class="element">+</div>
    </div>
</template>

<script>
import Vuex from 'vuex';

import Lesson from './Lesson.vue';

export default {
    name: 'Day',
    props: ['day'],
    methods: {
        openModal() {
            this.$store.commit('modal', this.day.id);
        }
    },
    components: {
        Lesson
    }
};
</script>

<style>
.day {
    float: left;
    margin-right: 5px;
}

.element {
    cursor: pointer;
}
</style>