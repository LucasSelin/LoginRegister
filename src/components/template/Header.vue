<template>
  <header class="header">
    <div class="containerImg">
      <img alt="pentagroLogo" src="../../assets/logo.png">
    </div>
  </header>
</template>

<script>
export default {
    name: 'header',
}
</script>

<style>
    .header {
        grid-area: header;
        display: flex;
        border-bottom: #d3d3d3 solid 1px ;
        align-items: center;
    }
    .containerImg img {
        padding: 20px;
        max-height: 140px;
        max-width: 200px;
        object-fit: cover;
        border-right: #d3d3d3 solid 1px;
    }
</style>