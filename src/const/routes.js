class MyRouter {
  static slug = "[slug]"
  static Home = {href:"/"}
  static Products = {href:"/products"}
  static Photos = {href:"/photos"}

  static ProductDetail = {href:`${this.Products.href}/${this.slug}`, as: (slug) => `${this.Products.href}/${slug}`} // ProductsList
  static ProductsList = {href:`${this.Products.href}/${this.slug}`, as: (slug,id) => `${this.Products.href}/${slug}~${id}`} // ProductDetail

  static PhotoDetails = {href:`${this.Photos.href}/${this.slug}`, as:(slug,id) => `${this.Photos.href}/${slug}~${id}`}
}
export default MyRouter
