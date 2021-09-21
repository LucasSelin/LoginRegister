<template>
<v-app>
  <div id="app">
    
    <!-- Importa os componentes de template para substituir no index -->
    <!-- Dividindo as paginas em 3 -->
    <Header />
    <Content /> <!-- Sera o unico a mudar de acordo com a URL -->
    <Footer />
     
  </div>
  </v-app> 
</template>

<script>
import Header from './components/template/Header.vue'
import Content from './components/template/Content.vue'
import Footer from './components/template/Footer.vue'

export default {
  name: 'App',
  components: { Header, Footer, Content }
}
</script>

<style>
  @font-face {
        font-family: "Oswald-Regular";
        src: url("./fonts/Oswald-Regular.ttf");
  }
  * {
        font-family: "Oswald-Regular";
  }
  body {
        margin: 0;
    }
  #app {
    height: 100vh;
    display: grid;
    grid-template-rows: 80px 1fr 80px;
    grid-template-areas: 
      "header"
      "content"
      "footer"
  }
</style>
