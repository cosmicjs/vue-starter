<template>
  <div>
    <h1>{{ page.title }}</h1>
    <div v-html="page.content"></div>
  </div>
</template>
<script>
export default {
   props: ['page'],
}
</script>
