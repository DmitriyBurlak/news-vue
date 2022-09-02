<template>
  <div class="new" v-if="news">
    <Button @click="$router.go(-1)">Вернуться назад</Button>
    <div class="new__info">
      <div>
        <div>author: {{authorName(news.userId).name}}</div>
        <div>published: {{new Date(news.timestamp).formatting('dd.mm.yyyy')}}</div>
        <div>rating: {{news.rating}}</div>
        <div>link: {{$route.path}}</div>
      </div>
      <div>
        <Button v-if="checkFavorit" color="danger" @click="DELETE_FAVORITES(news.id)">Удалить из избраного</Button>
        <Button v-else color="success" @click="UPDATE_FAVORITES(news.id)">В избраное</Button>
      </div>
    </div>
    <div class="new__title">{{news.title}}</div>
    <div class="new__content">{{news.body}}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Button from '../components/Button/Button.vue';

export default {
  props: ['newId'],
  components: { Button },
  computed: {
    ...mapGetters([
      'NEWS', 'AUTHORS', 'FAVORITES'
    ]),
    news() {
      return this.NEWS.find(i => i.id === +this.newId);
    },
    authorName() {
      return id => this.AUTHORS.find(i => i.id == id);
    },
    checkFavorit() {
      return this.FAVORITES.includes(+this.newId);
    }
  },
  methods: {
    ...mapActions([
      'UPDATE_FAVORITES', 'DELETE_FAVORITES'
    ]),
  }
}
</script>

<style lang="scss" scoped>
  .new {
    &__info {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #8a8282;
      padding: 15px 0;
    }
    &__title {
      text-transform: uppercase;
      text-align: center;
      padding-bottom: 15px
    }  
  }
</style>