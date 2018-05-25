import Cosmic from 'cosmicjs'
const api = Cosmic()
const bucket = api.bucket({
  slug: process.env.COSMIC_BUCKET || 'node-starter'
})
export default bucket