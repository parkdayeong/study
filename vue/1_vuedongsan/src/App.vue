<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>상세페이지 제목</h4>
      <p>상세페이지내용</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a href="" v-for="(a, i) in menu" :key="i">{{ i }}{{ a }}</a>
  </div>

  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <h3>logo영역</h3>
  <div v-for="(product, i) in 원룸들" :key="i">
    <img :src="product.image" alt="" class="room-img" />
    <h4>{{ product.title }}</h4>
    <p>{{ product.price }}</p>
    <p>{{ product.content }}</p>
    <button @click="신고수[i]++">허위매물신고</button> <span>신고수 : {{ 신고수[i] }}</span>
  </div>
</template>

<script>
import data from './oneroom.js';

export default {
  name: 'App',
  data() {
    return {
      // 데이터보관
      모달창열렸니: false,
      menu: ['Home', 'Products', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      신고수: [0, 0, 0, 0, 0, 0],
      원룸들: data,
    };
  },
  methods: {
    increase() {
      this.신고수 += 1;
    },
  },
  components: {},
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
