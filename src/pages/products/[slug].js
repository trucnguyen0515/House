// import "jquery";
import "antd/dist/antd.css";
import "../../scss/pages/[slug].scss";


import { withRouter } from "next/router";
import { Component, Fragment } from "react";
import Layout1 from "../../layouts/layout1";
import MyRouter from "../../const/routes";
import { Breadcrumb, Row, Col } from "antd";
import Link from "next/link";
import {MyService,FuncService} from "../../services/myService";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

// data
import { dataProductPosition, dataCategories } from "../../data/data";


import CategoryComp  from "../../components/categoryComp";
import ProductComp  from "../../components/productComp";
import { NewHOC } from "../../hoc/newComponent";
import { SoLuongHienThiToiDa, TenHienThiToiDa } from "../../const/const";
import LoadingPage from "../../components/SharedComp/LoadingPage";

export async function getStaticPaths() {
  const paths = dataCategories.map(data => `/products/${data.slug}`);
  return {
    paths,
    fallback: false
  };
}
export async function getStaticProps({ params }) {
  let product,productsChild,productsChild_2;
  let arrChild_1 = [];

  let data = await getData();

  const arrStr = params.slug.split("~");
  let typeComp = arrStr.length === 1 ? 0 : 1 // 0 CategoryComp, 1 ProductComp

  if(typeComp === 0){
    product = FuncService.search(data,"slug",arrStr[0]); // Danh muc hien tai (F1)
    productsChild = FuncService.find(data,product.children,'id'); // Danh sach con cua danh muc hien tai (F2)
    productsChild.map((res,i) => res.children.length > 0 ? arrChild_1 = [...arrChild_1,...res.children]: null) // lay tat ca con cua danh sach con cua danh muc hien tai (F3)
    productsChild_2 = FuncService.find(data,arrChild_1,'id'); // lay tat ca con cua danh sach con cua danh muc hien tai (F3)
  }
  if(typeComp === 1){

  }
  console.log("ssr")
  return { props: {typeComp, product, productsChild, productsChild_2,loading:false}};
}


const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataCategories);
    }, 500);
  });
};

class ProductsPosition extends Component {

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  //   if(nextProps.loading !== this.state.loading) {
  //     this.setState({loading: this.props.loading});
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.loading!==prevState.loading){
      return { loading: prevState.loading};
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.loading === prevState.loading){
      this.setState({loading: !this.state.loading})
    }
  }

  state = {
    loading:this.props.loading
  }

  listBreadcrum = [
    {
      name: "All Products",
      href: MyRouter.Products.href,
      as: ""
    },
    {
      name: MyService.parseSeoToName(
        this.props.router.query[Object.keys(this.props.router.query)[0]]
      ),
      href: this.props.router.pathname,
      as: this.props.router.asPath
    }
  ];

  renderBreadcrumb = () => {
    let slug = this.props.router.query[MyRouter.slug.replace("[","").replace("]","")];
    let objCur = FuncService.search(dataCategories,'slug',slug);

    return this.listBreadcrum.map((item, i) => {
      return (
        <Breadcrumb.Item key={i}>
          <Link href={item.href} as={item.as}>
            <span className="mylink fs-15">{item.name}</span>
          </Link>
        </Breadcrumb.Item>
      );
    });
  };

  render() {
    const {typeComp,product,productsChild,productsChild_2} = this.props;
    const renderComp = typeComp === 0
    ? <CategoryComp product={product} productsChild={productsChild} productsChild_2={productsChild_2} callback={(res) => {
        this.setState({loading:true})
    }}/>
    : <ProductComp product={product} productsChild={productsChild} callback={(res) => {
        this.setState({loading:true})
    }}/>

    // console.log("product: ",product);
    // console.log("productsChild: ",productsChild)
    // console.log("productsChild_2: ",productsChild_2)


    return (
      <Layout1>
        <LoadingPage isLoading={this.state.loading}>
        <div className="container" id="productPosition">
          <Breadcrumb>{this.renderBreadcrumb()}</Breadcrumb>
          <h1>
            {MyService.parseSeoToName(this.props.router.query[Object.keys(this.props.router.query)[0]])}
          </h1>
          {renderComp}
        </div>
        </LoadingPage>
      </Layout1>
    );
  }
}



export default withRouter(ProductsPosition);
