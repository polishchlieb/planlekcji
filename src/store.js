import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		timetable: [
			{
				name: 'Poniedziałek',
				lessons: ['pizza nub', 'sky nub']
			},
			{
				name: 'Wtorek',
				lessons: ['pioter nub', 'chlebke nub', 'test oko nub']
			}
		]
	},
	mutations: {},
	actions: {}
});