<template>
  <div class="book-search row mb-5">
    <h1>Поиск</h1>
    <div class="book-search__container">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control book-search__input"
          placeholder="Поиск"
          v-model="search"
        />

        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="searchBooks"
        >
          Найти
        </button>
      </div>
    </div>

    <div class="col-md-6 mt-3" v-if="books.length">
      <h4>Результат поиска</h4>
      <ul class="list-group" id="books-list" style="width: 800px">
        <li 
            class="list-group-item" 
            v-for="book in books" 
            :key="book.id"
        >
          {{ book.author + " " + book.title }}

          <button
            class="m-3 btn btn-sm btn-danger"
            @click="removeBook(book.id)"
          >
            Удалить
          </button>
        </li>
      </ul>
    </div>
    <div v-else>
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "book-search",
  data() {
    return {
      search: "",
      books: [],
      text: "",
    };
  },
  methods: {
    searchBooks() {
      this.axios
        .get("http://localhost:3000/books?q=" + this.search)
        .then((response) => {
          this.books = response.data;
          if (!this.books.length) {
            this.text = "По вашему запросу ничего не найдено";
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    removeBook(id) {
      this.axios
        .delete("http://localhost:3000/books/" + id)
        .then((response) => {
          this.searchBooks();
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss">
element.style {
  text-align: center;
  width: 100%;
}
.input-group {
  width: 100%;
  justify-content: center;
}
.book-search {
  max-width: 900px;
  margin: auto;

  &__container {
    text-align: center;
    width: 800px;
  }
}

.list-group-item {
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>