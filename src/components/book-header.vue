<template>
  <header class="book-header">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>Книги</h1>
            <div class="book-header__links">
              <router-link
                :to="{ name: 'catalog' }"
                class="book-header__links_item"
              >
                Каталог
              </router-link>
              <router-link
                :to="{ name: 'add' }"
                class="book-header__links_item"
              >
                Добавить книгу
              </router-link>
              <router-link
                :to="{ name: 'search' }"
                class="book-header__links_item"
              >
                Поиск
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
export default {};
</script>

<style lang="scss">
.book-header {
  background-image: url("../assets/images/bg_header.jpg");
  height: 160px;
  background-position: 50%;
  background-size: cover;
  padding: 30px;

  &__links {
    display: flex;
    justify-content: space-evenly;

    &_item {
      text-decoration: none;
      color: #262626;
      padding-top: 10px;
    }
  }
}
</style>