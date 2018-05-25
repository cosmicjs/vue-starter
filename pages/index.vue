<template>
  <div>
    <div class="hero"><h1><a href="/">Cosmic JS Vue Starter</a></h1></div>
    <div class="main">
      <h1>{{ page.title }}</h1>
      <div>{{ page.content }}</div>
      <Nav />
      <Footer />
    </div>
  </div>
</template>
<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
import bucket from '~/config'
export default {
  async asyncData({ req, params }) {
    const slug = 'home'
    const res = await bucket.getObject({ slug })
    const page = res.object
    return { page }
  },
  components: {
    Nav,
    Footer
  },
  head () {
    return {
      title: this.page.title
    }
  }
}
</script>