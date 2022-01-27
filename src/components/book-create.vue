<template>
  <div class="submit-form">
    <h1>Добавить новую книгу</h1>
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Название книги</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="book.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="author">Автор</label>
        <input
          type="text"
          class="form-control"
          id="author"
          required
          v-model="book.author"
          name="author"
        />
      </div>

      <div class="form-group">
        <label for="description">Описание</label>
        <textarea
          class="form-control"
          id="description"
          required
          v-model="book.description"
          name="description"
        ></textarea>
      </div>

       <div class="form-group">
        <label for="language">Язык</label>
        <input
          class="form-control"
          id="language"
          required
          v-model="book.language"
          name="language"
        />
      </div>

      <div class="form-group">
        <label for="genre">Жанр</label>
        <select
          class="form-control"
          id="genre"
          required
          v-model="book.genre"
          name="genre"
        >
        <option 
        v-for="genre in genres"
        :key="genre.id"
        >
        {{ genre.name }}
        </option>
        </select>
      </div>

      <div class="form-group">
        <label for="price">Цена</label>
        <input
          type="number"
          class="form-control"
          id="price"
          required
          v-model="book.price"
          name="price"
        />
      </div>

      <div class="form-group">
        <label for="pageCount">Кол-во страниц</label>
        <input
          type="number"
          class="form-control"
          id="pageCount"
          required
          v-model="book.pageCount"
          name="pageCount"
        />
      </div>

      <button @click="addBook" class="btn btn-success">Добавить</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newBook">
        Добавить новую книгу
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "book-create",
  data() {
    return {
      book: {
        id: null,
        title: "",
        author: "",
        genre: "",
        language: "",
        preview: "",
        description: "",
        tags: [],
        ISBN: "",
        price: 0,
        pageCount: 0,
      },
      genres: [{ id: 1, name: "Пьеса"},
        { id: 2, name: "Видения"},
        { id: 3, name: "Новелла"},
        { id: 4, name: "Ода"},
        { id: 5, name: "Опус"},
        { id: 6, name: "Очерк"},
        { id: 7, name: "Поэма"},
        { id: 8, name: "Повесть"},
        { id: 9, name: "Рассказ"},
        { id: 10, name: "Роман"},
        { id: 11, name: "Скетч"},
        { id: 12, name: "Эпопея"},
        { id: 13, name: "Эпос"},
        { id: 14, name: "Эссе"}
      ],
      submitted: false,
    };
  },
  methods: {
    addBook() {
      let data = {
        id: Date.now(),
        title: this.book.title,
        description: this.book.description,
        author: this.book.author,
        genre: this.book.genre,
        language: this.book.language,
        preview: "no_foto.jpg",
        tags: [],
        ISBN: "",
        price: parseFloat(this.book.price),
        pageCount: parseFloat(this.book.pageCount),
      };

      this.axios
        .post("http://localhost:3000/books", data)
        .then((response) => {
          response.json();
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });

     this.newBook()

    },
    newBook() {
      this.submitted = false;
      this.book = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 900px;
  margin: auto;
}
.form-group {
  text-align: left;
  margin-bottom: 16px;
}
</style>
