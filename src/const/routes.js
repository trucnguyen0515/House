class MyRouter {
  static slug = "[slug]"
  static Home = {href:"/"}
  static Products = {href:"/products"}
  static ProductDetail = {href:`${this.Products.href}/${this.slug}`, as: (slug) => `${this.Products.href}/${slug}`}
}
export default MyRouter
