


import { withRouter, createRouter, useRouter } from "next/router";
import { Component } from "react";
import Layout1 from "../../layouts/layout1";
import MyRouter from "../../const/routes";
import { Breadcrumb, Row, Col } from "antd";
import Link from "next/link";
import { MyService, FuncService } from "../../services/myService";


// data
import { dataCategories, dataProducts } from "../../data/data";


import CategoryComp from "../../components/ProductPage/categoryComp";
import ProductComp from "../../components/ProductPage/productComp";
import LoadingPage from "../../components/SharedComp/LoadingPage";

export async function getStaticPaths() {
  const paths = dataCategories.map(data => `${MyRouter.Products.href}/${data.slug}`);
  const paths2 = dataProducts.map(data => `${MyRouter.Products.href}/${data.slug}~${data.id}`);

  return {
    paths: [...paths, ...paths2],
    fallback: false
  };
}
export async function getStaticProps({ params }) {
  let breadcrumb = '', product = '', categoriesChild = '', categoriesChild_2 = '', productsChild = '', arrChild_1 = [], productDetail = '';

  let dataCate = await getData(dataCategories, 400);

  const arrStr = params.slug.split("~");
  let typeComp = arrStr.length === 1 ? 0 : 1
  // 0 CategoryComp, 1 ProductComp
  if (typeComp === 0) {
    // Danh muc hien tai (F1)
    product = FuncService.search(dataCate, "slug", arrStr[0]);
    breadcrumb = FuncService.searchAll(dataCate, "id", product.breadcrumb);
    // Danh Muc hien tai co danh sach san pham
    if (product.typeShow === 3) {
      let dataPro = await getData(dataProducts, 1);
      productsChild = FuncService.find(dataPro, product.children, 'id');
    }
    // Danh Muc hien tai ko co danh sach san pham, chi co danh muc con
    if (product.typeShow !== 3) {
      // // Danh sach con cua danh muc hien tai (F2)
      categoriesChild = product.children.length > 0 ? FuncService.find(dataCate, product.children, 'id') : [];
    }
    if (product.typeShow === 0) {
      // // lay tat ca con cua danh sach con cua danh muc hien tai (F3)
      categoriesChild.length > 0 ? categoriesChild.map((res, i) => res.children.length > 0 ? arrChild_1 = [...arrChild_1, ...res.children] : null) : null
      arrChild_1 = MyService.dedup(arrChild_1);
      categoriesChild_2 = FuncService.find(dataCate, arrChild_1, 'id');
    }

  }
  if (typeComp === 1) {
    let dataPro = await getData(dataProducts, 1);
    productDetail = FuncService.search(dataPro, 'id', arrStr[1]);
    product = FuncService.search(dataCate, 'id', productDetail.idParent);
    breadcrumb = FuncService.searchAll(dataCate, 'id', product.breadcrumb)
  }
  return { props: { typeComp, breadcrumb, product, productsChild, categoriesChild, categoriesChild_2, productDetail, loading: false } };
}

const getData = (data, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};


class ProductsPosition extends Component {

  static getDerivedStateFromProps(props, state) {
    return { loading: state.loading }
  }
  componentDidUpdate(prevProps, prevState) {
    this.state.loading === true && prevState.loading === this.state.loading ? this.setState({ loading: this.props.loading }) : null
  }


  componentDidMount(){
    // back browser
    window.onpopstate = () => {
      this.setState({loading:true})
    }
  }
  componentWillUnmount(){
    window.onpopstate = null;
  }

  state = {
    loading: this.props.loading
  }

  renderBreadcrumb = () => {
    const { typeComp, product, productDetail, breadcrumb } = this.props;
    let listBreadcrum = [
      {
        name: "All Products",
        href: MyRouter.Products.href,
        as: ""
      }
    ];

    if (typeComp === 0) {
      if (breadcrumb.length > 0) {
        for (let res of breadcrumb) {
          listBreadcrum = [...listBreadcrum, {
            name: res.name,
            href: MyRouter.ProductDetail.href,
            as: MyRouter.ProductDetail.as(res.slug)
          }]
        }
      }
      listBreadcrum = [...listBreadcrum, {
        name: product.name,
        href: this.props.router.pathname,
        as: this.props.router.asPath
      }]
    }
    if (typeComp === 1) {
      // console.log("product: ",product)
      // console.log("productDetail: ",productDetail)
      for (let res of breadcrumb) {
        listBreadcrum = [...listBreadcrum, {
          name: res.name,
          href: MyRouter.ProductDetail.href,
          as: MyRouter.ProductDetail.as(res.slug)
        }]
      }
      listBreadcrum = [...listBreadcrum, {
        name: product.name,
        href: MyRouter.ProductDetail.href,
        as: MyRouter.ProductDetail.as(product.slug)
      },
      {
        name: `MPN ${productDetail.id}`,
        href: MyRouter.ProductsList.href,
        as: MyRouter.ProductsList.as(productDetail.slug, productDetail.id)
      }
      ]
    }


    


    return listBreadcrum.map((item, i) => {
      return (
        <Breadcrumb.Item key={i}>
          {
            i + 1 === listBreadcrum.length ?
              <span className="fs-15">{item.name}</span> :
              <Link href={item.href} as={item.as}>
                <span className="mylink fs-15" onClick={() => this.setState({ loading: true })}>{item.name}</span>
              </Link>

          }
        </Breadcrumb.Item>
      );
    });
  };

  render() {

  

    const { typeComp, product, categoriesChild, categoriesChild_2, productsChild, productDetail } = this.props;
    const renderComp = typeComp === 0
      ? <CategoryComp product={product} productsChild={productsChild} categoriesChild={categoriesChild} categoriesChild_2={categoriesChild_2} callback={(res) => {
        this.setState({ loading: true })
      }} />
      : <ProductComp productDetail={productDetail} callback={(res) => {
        this.setState({ loading: true })
      }} />

    return (
      <Layout1>
        <LoadingPage isLoading={this.state.loading}>
          <div id="Products">
            <div className="wrapper">
              <div className="container">
                <Breadcrumb>{this.renderBreadcrumb()}</Breadcrumb>
                {typeComp === 0 ?
                  <h1 className="pb-25">
                    {product.name}
                  </h1> : null
                }
              </div>
            </div>
            {renderComp}
          </div>
        </LoadingPage>
      </Layout1>
    );
  }
}



export default withRouter(ProductsPosition);
