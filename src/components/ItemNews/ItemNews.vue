<template>
    <div class="new">
        <router-link :to="'/new/' + news.id">
            <div class="new__wrapper">
                <div class="new__info">
                    <span class="name">{{authorName(news.userId).name}}</span>
                    <span>{{new Date(news.timestamp).formatting('dd.mm.yyyy')}}</span>
                </div>
                <div class="new__title">{{news.title}}</div>
                <div class="new__rating">Rating: {{news.rating}}</div>
            </div>
        </router-link>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        props: ['news'],
        computed: {
            ...mapGetters([
                'AUTHORS'
            ]),
            authorName() {
                return id => this.AUTHORS.find(i => i.id == id);
            },
        },
    }
</script>

<style lang="scss">
.new {
    width: 25%;
    min-width: 210px;
    padding: 0 5px;
    margin: 0 auto 10px;

    a {
        text-decoration: none;
        display: flex;
        height: 100%;
        min-height: 150px;
    }
    
    &__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        border: 1px solid #ccc;
        padding: 5px 15px;
        cursor: pointer;

    }

    &__info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        color: #8a8282;
        padding-bottom: 10px;

        .name {
            padding-right: 15px;
        }
    }

    &__title {
        text-align: center;
        text-transform: uppercase;
    }

    &__rating {
        font-size: 13px;
        color: #8a8282;
        padding-top: 15px;
    }
}
@media screen and (max-width: 900px) {
    .new {
        width: 50%;
    }
}
@media screen and (max-width: 480px) {
    .new {
        width: 100%;
    }
}
</style>