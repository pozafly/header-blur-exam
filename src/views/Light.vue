<template>
  <div class="page-wrapper">
    <header>
      <div class="header-wrapper">
        <img src="@/assets/logo.png" alt="logo" class="logo" />
        <nav>
          <ul class="nav-wrapper">
            <li>some navigation</li>
            <li>some navigation</li>
          </ul>
        </nav>
      </div>
    </header>
    <article>
      <div class="content">
        <img v-for="(item, index) in items" :key="index" :src="item.src" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { src: 'https://placeimg.com/840/480/animals' },
        { src: 'https://placeimg.com/840/480/arch' },
        { src: 'https://placeimg.com/840/480/people' },
        { src: 'https://placeimg.com/840/480/tech' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  height: 100%;
  width: 100%;

  header {
    top: 0;
    left: 0;
    width: 100%;
    height: 5%;
    padding: 8px;
    z-index: 10;
    position: fixed;
    backdrop-filter: blur(4px);
    background-color: rgba(255, 255, 255, 0.2);
    box-sizing: border-box;

    .header-wrapper {
      height: 100%;
      display: flex;
      justify-content: space-between;
      .logo {
        width: 33px;
      }
      nav {
        position: relative;
        height: 100%;
        .nav-wrapper {
          height: inherit;
          display: flex;
          justify-content: center;
          align-items: center;
          li {
            margin-right: 2rem;
          }
        }
      }
    }
  }
  article {
    display: flex;
    flex-direction: column;
    .content {
      margin: 2.75% auto 0;
      img {
        display: block;
        margin: 0 auto;
        border-radius: 14px;
        margin-bottom: 9px;
      }
    }
  }
}
</style>
