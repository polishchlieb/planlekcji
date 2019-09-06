<template>
    <div class="modal">
        name: <input type="text" v-model="name"><br>
        room: <input type="text" v-model="room"><br>
        teacher: <input type="text" v-model="teacher"><br>
        <button @click="submit()">oko nub</button>
    </div>
</template>

<script>
import Vuex from 'vuex';

export default {
    name: 'NewLessonModal',
    props: ['day'],
    data() {
        return { name: '', room: '', teacher: '' };
    },
    methods: {
        submit() {
            let { name, room, teacher } = this;
            this.$store.commit('addLesson', {
                name, room, teacher
            });
        }
    }
};
</script>