<template>
  <div class="content">
    <router-view></router-view> <!-- Sera substituido pelas views -->
  </div>
</template>

<script>
export default {
    name: 'content',    
}
</script>

<style>
    .content {
        grid-area: content;
        display: flex;
        padding-top:  40px;
        padding-bottom: 40px;
        justify-content: center;
    }
</style>