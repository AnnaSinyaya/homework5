<template>
  <div class="book-catalog">
    <h1>Витрина книжного магазина</h1>
    <book-catalog-item
      v-for="book in BOOKS"
      :key="book.id"
      :book_info="book"
      @sendAddedBookId="showInConsole"
    />
  </div>
</template>

<script>
import bookCatalogItem from "./book-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "book-catalog",
  components: {
    bookCatalogItem,
  },
  props: {},
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    this.GET_BOOKS_LIST();
  },
  computed: {
    ...mapGetters(["BOOKS"]),
  },
  methods: {
    showInConsole(data) {
      console.log(data);
    },
    ...mapActions(["GET_BOOKS_LIST"]),
  },
};
</script>

<style>
</style>