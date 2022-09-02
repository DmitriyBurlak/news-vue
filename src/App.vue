<template>
  <div class="wrapper">
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Layout from './components/Layout.vue';

export default {
  components: {Layout},
  methods: {
    ...mapActions([
      'GET_JSON'
    ]),
  },
  mounted() {
    this.GET_JSON();
  },
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .wrapper {
    width: 100%;
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 25px;
    padding-top: 20px;
  }
</style>