<template>
  <div class="book-catalog-item">
    <div class="book-catalog-item__img_container">
      <img :src="require('../assets/images/' + (book_info.preview == undefined ? 'no_foto.jpg' : book_info.preview))" alt="img" />
    </div>
    <div class="book-catalog-item__body">
      <p class="book-catalog-item__title">{{ book_info.title }}</p>
      <p class="book-catalog-item__author">{{ book_info.author }}</p>
      <p class="book-catalog-item__description">{{ book_info.description }}</p>
      <p class="book-catalog-item__genre">{{ book_info.genre }}</p>
      <p class="book-catalog-item__page_cnt">
        Количество страниц: {{ book_info.pageCount }}
      </p>
      <p class="book-catalog-item__price">Цена: {{ book_info.price }}</p>
      <button
        class="btn btn-success book-catalog-item__btn_add"
        @click="sendDataToCatalog"
      >Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
// import bookCatalog from './book-catalog'
// import bookCart from './book-cart'

export default {
  name: "book-catalog-item",
  components: {},
  props: {
    book_info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counterClick: 0,
    };
  },
  computed: {},
  methods: {
      sendDataToCatalog(){
          this.$emit('sendAddedBookId', this.book_info.id)
          this.counterClick++
      }
  }
};
</script>

<style lang="scss">
.book-catalog-item {
  display: flex;
  flex-basis: 25%;
  box-shadow: 0 0 5px 0 rgba(16, 24, 40, 0.15);
  padding: 12px;
  margin: 10px auto;

  &__body {
    text-align: left;
    width: calc(100% - 260px);
  }

  &__img_container {
    padding: 16px;
    width: 260px;
  }
  & img {
    height: 260px;
  }
}
</style>