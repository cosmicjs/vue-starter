<template>
  <div>
    <div class="hero"><h1><a href="/">Cosmic JS Vue Starter</a></h1></div>
    <div class="main">
      <PageNotFound v-if="page.component && page.component==='404'" />
      <Page :page="page" v-else />
      <Nav />
      <Footer />
    </div>
  </div>
</template>
<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
import Page from '~/components/Page.vue'
import PageNotFound from '~/components/404.vue'
import bucket from '~/config'
export default {
  async asyncData({ req, params }) {
    let slug = params.slug
    let page
    if (!slug)
      slug = 'home'
    try {
      const res = await bucket.getObject({ slug })
      page = res.object
    }
    catch(e) {
      page = {
        title: 'Page not found',
        component: '404'
      }
    }
    return { page }
  },
  components: {
    Nav,
    Page,
    Footer,
    PageNotFound
  },
  head () {
    return {
      title: this.page.title
    }
  }
}
</script>