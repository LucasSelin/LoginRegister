<template>
  <footer class="footer">
      <span>
         <span class="nomeFooter">Desenvolvido por Lucas Selin</span> - 2021 - Pentagro
        </span>
  </footer>
</template>

<script>
export default {
    name: 'footer',
}
</script>

<style>
    .footer {
        grid-area: footer;
        border-top: #d3d3d3 solid 1px;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 20px;
    }
    .nomeFooter {
        color: rgb(0, 154, 154);
        font-weight: bold;
    }
</style>