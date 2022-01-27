<template>
    <div class="book-main-wrapper">
        <p>{{title}}</p>
        <router-view></router-view>
    </div>
</template>

<script>
// import bookCatalog from './book-catalog.vue'
// import bookCreate from './book-create.vue'
// import bookSearch from './book-search.vue'

export default {
    name:'book-main-wrapper',
    components: {
        // bookCatalog,
        // bookCreate,
        // bookSearch,
    },
    props: {},
    data(){
        return {
            title: 'Домашнее задание №4 - vuex'
        }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted(){
        console.log('mounted!');
    }
}
</script>

<style>
.book-main-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
}
</style>