<template>
    <div class="lessonmodal">
        {{ lesson.name }}<br>
        {{ lesson.room }} {{ lesson.teacher }}

        <button @click="deleteLesson()">delet</button>
    </div>
</template>

<script>
import Vuex from 'vuex';

export default {
    name: 'LessonModal',
    computed: {
        lesson() {
            return this.$store.state.selected;
        }
    },
    methods: {
        deleteLesson() {
            this.$store.commit('deleteLesson', [this.lesson.day, this.lesson.id]);
        }
    }
}
</script>

<style lang="scss" scoped>
.lessonmodal {
    margin-top: 10px;
    font-weight: bold;
}
</style>