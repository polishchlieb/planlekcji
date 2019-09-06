import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const template = {
	name: 'Test',
	days: [
		{ name: 'Poniedziałek', lessons: [], id: 0 },
		{ name: 'Wtorek', lessons: [], id: 1 },
		{ name: 'Środa', lessons: [], id: 2 },
		{ name: 'Czwartek', lessons: [], id: 3 },
		{ name: 'Piątek', lessons: [], id: 4 },
	]
};

const store = new Vuex.Store({
	state: {
		timetable: null,
		newModalOpen: false,
		newModalId: 0,
		selected: null
	}, 
	mutations: {
		modal(state, id) {
			state.newModalOpen = !state.newModalOpen;
			state.newModalId = id;
		},
		addLesson(state, lesson) {
			lesson.id = state.timetable.days[state.newModalId].lessons.length;
			lesson.day = state.newModalId;

			state.timetable.days[state.newModalId].lessons.push(lesson);
			localStorage.setItem('timetable', JSON.stringify(state.timetable));
			state.newModalOpen = false;
		},
		setSelected(state, data) {
			state.selected = data;
		},
		deleteLesson(state, [ day, id ]) {
			state.timetable.days[day].lessons = state.timetable.days[day].lessons.filter((e, i) => i != id)
			state.selected = null;
			localStorage.setItem('timetable', JSON.stringify(state.timetable));
		}
	}
});

if(localStorage.getItem('timetable'))
	store.state.timetable = JSON.parse(localStorage.getItem('timetable'))
else {
	localStorage.setItem('timetable', JSON.stringify(template));
	store.state.timetable = template;
}

export default store;