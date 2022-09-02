import { createStore } from 'vuex'
import axios from 'axios';
import {formatData} from '../helpers';

const store = createStore({
  state: {
    news: [],
    authors: [],
    data: [],
    favorites: [],
    count: 0,
    start: 0,
  },
  mutations: {
    SET_JSON_TO_STATE: (state, [news, authors]) => {
      console.log('SET_JSON_TO_STATE');
      state.news = formatData(news.data);
      state.authors = authors.data;
      state.count = 20;
      state.start = 0;
      state.data = [];
    },
    SET_DATA: (state) => {
      console.log('SET_DATA');
      let arrLength = state.news.length;
      
      if (state.count < arrLength) {
        state.data = [...state.data, ...state.news.slice(state.start, state.count)]
        state.start = state.start + state.count;
        state.count = state.count + state.count;
      }
    },
    SET_FAVORITES: (state, newId) => {
      console.log('SET_FAVORITES');
      if (newId) {
        state.favorites.push(newId);
        localStorage.setItem("favoritNews", JSON.stringify(state.favorites));
      } else {
        state.favorites = JSON.parse(localStorage.getItem("favoritNews") || "[]");
      }
    },
    SET_DELETE_FAVORITES: (state, newId) => {
      console.log('SET_DELETE_FAVORITES');
      let index = state.favorites.indexOf(newId);
      state.favorites.splice(index, 1);
      localStorage.setItem("favoritNews", JSON.stringify(state.favorites));
    },
  },
  actions: {
    GET_JSON({commit}) {
      console.log('GET_JSON');
      Promise.all([
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('https://jsonplaceholder.typicode.com/users')
      ]).then((response) => {
        commit("SET_JSON_TO_STATE", response);
        commit("SET_DATA");
        commit("SET_FAVORITES");
      }).catch((err) => {
        console.log(err);
      });
    },
    UPDATE_FAVORITES({commit}, payload) {
      console.log('UPDATE_FAVORITES', window.localStorage, payload);
      commit("SET_FAVORITES", payload);
    },
    DELETE_FAVORITES({commit}, payload) {
      console.log('DELETE_FAVORITES', payload);
      commit("SET_DELETE_FAVORITES", payload);
    },
  },
  getters: {
    NEWS(state) {
      return state.news;
    },
    AUTHORS(state) {
      return state.authors;
    },
    DATA(state) {
      return state.data;
    },
    FAVORITES(state) {
      return state.favorites
    }
  },
})

export default store;