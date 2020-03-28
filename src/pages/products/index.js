

// import "jquery";


import { Component } from "react";
import { Row, Col, Carousel } from "antd";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { dataCategories } from "../../data/data";

import MyRouter from "../../const/routes";


import Layout1 from "../../layouts/layout1";
import LoadingPage from "../../components/SharedComp/LoadingPage";


class ProductPage extends Component {

  state = {
    loading: false
  };

  arrLengthThan0 = []

  renderCategories = () => {
    return dataCategories.map((res, i) => {
      if (res.parent.length === 0) {
        return (
          <Link
            key={i}
            href={MyRouter.ProductDetail.href}
            as={MyRouter.ProductDetail.as(res.slug)}
          >
            <p className="mylink mb-5" onClick={() => this.setState({ loading: true })}>{res.name}</p>
          </Link>
        )
      }
    });
  };
  renderProducts_child = (parr) => {
    let SoLuongSPMuonHienThi = 4
    let itemsChild = [];
    let i = 0;
    for(let res of dataCategories){
      if(res.parent.length > 0){
        for(let res2 of res.parent){
          if(res2 === parr.id && i < SoLuongSPMuonHienThi){
            itemsChild.push(res);
            i++;
          }
        }
      }
    }
    return itemsChild.map((res, i) => {
        return itemsChild.length - 1 === i ? (
          <div key={i}>
            <Link href={`${MyRouter.ProductDetail.href}`} as={`${MyRouter.ProductDetail.as(res.slug)}`}>
              <p className="mylink mb-5" onClick={() => this.setState({ loading: true })}>{res.name}</p>
            </Link>
            <Link href={`${MyRouter.ProductDetail.href}`} as={`${MyRouter.ProductDetail.as(parr.slug)}`}>
            <p className="mylink mb-5" style={{ fontWeight: "bold" }}>
              Show All {parr.name}{" "}
              <FontAwesomeIcon className="ml-5" icon={faChevronRight} />
            </p>
            </Link>
          </div>
        ) : (
          <Link key={i} href={`${MyRouter.ProductDetail.href}`} as={`${MyRouter.ProductDetail.as(res.slug)}`}>
            <p  className="mylink mb-5" onClick={() => this.setState({ loading: true })}>
              {res.name}
            </p>
          </Link>
        )
      })
  }
  renderProducts = () => {
    this.arrLengthThan0 = [];
    return dataCategories.map((res, i) => {
      if (res.parent.length === 0) {
        return (
          <Col span={8} key={i} className="mt-30">
            <div className="product">
              <Link
                href={MyRouter.ProductDetail.href}
                as={MyRouter.ProductDetail.as(res.slug)}
              >
                <img src={`/images/${res.url}`} onClick={() => this.setState({ loading: true })} />
              </Link>
              <Link
                href={MyRouter.ProductDetail.href}
                as={MyRouter.ProductDetail.as(res.slug)}
              >
                <span className="title mylink" onClick={() => this.setState({ loading: true })}>{res.name}</span>
              </Link>
              <div className="list mt-10">
                {
                 this.renderProducts_child(res)
                }
              </div>
            </div>
          </Col>
        );
      }
      this.arrLengthThan0.push(res)
    });
  };


  render() {
    const categories = this.renderCategories();
    const products = this.renderProducts();

    return (
      <Layout1>
        <LoadingPage isLoading={this.state.loading}>
          <div id="indexProduct" style={{background:'white'}}>
            <div className="container">
              <Row>
                <Col span={6} style={{ marginTop: "20px" }}>
                  <div className="categories">
                    <h3 className="text-bold mb-20">Categories</h3>
                    {categories}
                  </div>
                </Col>
                <Col span={18} style={{ marginTop: 0 }}>
                  <Carousel autoplay>
                    <div className="img">
                      <img src="/images/banner1.jpg" alt="house1" />
                    </div>
                    <div className="img">
                      <img src="/images/banner2.jpg" alt="house1" />
                    </div>
                  </Carousel>
                </Col>
                {products}
              </Row>
            </div>
          </div>
        </LoadingPage>
      </Layout1>
    );
  }
}

export default ProductPage;
