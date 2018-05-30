<template>
  <div>
    <h1>{{ page.title }}</h1>
    <div>{{ page.content}}</div>
  </div>
</template>
<script>
export default {
   props: ['page'],
}
</script>
