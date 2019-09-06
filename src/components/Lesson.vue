<template>
    <div class="element" @click="openModal()">
        {{ lesson.name }}
    </div>
</template>

<script>
import Vuex from 'vuex';

export default {
    name: 'Lesson',
    props: ['lesson'],
    methods: {
        openModal() {
            this.$store.commit('setSelected', this.lesson);
        }
    }
}
</script>