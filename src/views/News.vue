<template>
    <Button @click="GET_JSON()">Обновить</Button>
    <div class="favorites" v-if="FAVORITES.length">
        <h3 class="title">Новости в избраном:</h3>
        <div class="favorites__items">
            <ItemNews v-for="(item, idx) in favorit" :key="idx" :news="item" />
        </div>
    </div>
    <div class="news" v-if="DATA.length" ref="news">
        <h3 class="title">Новости:</h3>
        <div class="news__items">
            <ItemNews v-for="(item, idx) in DATA" :key="idx" :news="item" />
        </div>
    </div>
    <h3 class="title" v-else>Новости отсутсвуют</h3>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import ItemNews from '../components/ItemNews/ItemNews.vue';
import Button from '../components/Button/Button.vue';

export default {
    data() {
        return {
            count: 20,
            start: 0,
            data: [],
            bottom: false,
        }
    },
    components: { ItemNews, Button },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.SET_DATA();
        console.log('mounted');
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {
        ...mapGetters([
            'NEWS', 'DATA', 'FAVORITES'
        ]),
        favorit() {
            return this.NEWS.filter(i => this.FAVORITES.includes(i.id));
        }
    },
    methods: {
        ...mapActions([
            'GET_JSON',
        ]),
        ...mapMutations([
            'SET_DATA'
        ]),
        handleScroll() {
            let blockNews = this.$refs.news;

            if (blockNews) {
                let innerHeight = window.innerHeight;
                var blockNewsBottom = blockNews.getBoundingClientRect().bottom;
                if ((blockNewsBottom - innerHeight) < 50) {
                    this.SET_DATA();
                }
            }
        },
    }
}
</script>

<style lang="scss">
.news {
    padding-top: 20px;

    &__items {
        display: flex;
        flex-wrap: wrap;
    }
}

.title {
    padding-bottom: 10px;
    color: #8a8282;
}
.favorites {
    padding-top: 20px;

    &__items {
        display: flex;
        overflow-x: auto;

        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
    }
}
</style>