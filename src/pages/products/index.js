import Layout1 from "../../layouts/layout1";
import { Component } from "react";
import { Row, Col, Carousel } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import 'jquery';
import "../../scss/index.scss";
import "antd/dist/antd.css";


const data = [
    {
        id: 1,
        name: 'Furniture',
        url: 'cate1.jpg',
        data: [
            {
                id: 1,
                name: 'Living Room Furniture'
            },
            {
                id: 2,
                name: 'Kitchen & Dining Furniture'
            },
            {
                id: 3,
                name: 'Bedroom Furniture'
            },
            {
                id: 4,
                name: 'Bedroom Furniture'
            },
            {
                id: 5,
                name: 'Home Office Furniture'
            }]
    },
    {
        id: 2,
        name: 'Kitchen & Dining',
        url: 'cate2.jpg',
        data: [
            {
                id: 1,
                name: 'Kitchen & Dining Furniture'
            },
            {
                id: 2,
                name: 'Kitchen Fixtures'
            },
            {
                id: 3,
                name: 'Tile'
            },
            {
                id: 4,
                name: 'Kitchen Storage & Organization'
            },
            {
                id: 5,
                name: 'Tabletop'
            }
        ]
    },
    {
        id: 3,
        name: 'Bath',
        url: 'cate3.jpg',
        data: [
            {
                id: 1,
                name: 'Bathroom Vanities'
            },
            {
                id: 2,
                name: 'Bathroom Vanity Lighting'
            },
            {
                id: 3,
                name: 'Tile'
            },
            {
                id: 4,
                name: 'Showers'
            },
            {
                id: 5,
                name: 'Bathtubs'
            }
        ]
    },
    {
        id: 1,
        name: 'Furniture',
        url: 'cate1.jpg',
        data: [
            {
                id: 1,
                name: 'Living Room Furniture'
            },
            {
                id: 2,
                name: 'Kitchen & Dining Furniture'
            },
            {
                id: 3,
                name: 'Bedroom Furniture'
            },
            {
                id: 4,
                name: 'Bedroom Furniture'
            },
            {
                id: 5,
                name: 'Home Office Furniture'
            }]
    },
    {
        id: 2,
        name: 'Kitchen & Dining',
        url: 'cate2.jpg',
        data: [
            {
                id: 1,
                name: 'Kitchen & Dining Furniture'
            },
            {
                id: 2,
                name: 'Kitchen Fixtures'
            },
            {
                id: 3,
                name: 'Tile'
            },
            {
                id: 4,
                name: 'Kitchen Storage & Organization'
            },
            {
                id: 5,
                name: 'Tabletop'
            }
        ]
    },
    {
        id: 3,
        name: 'Bath',
        url: 'cate3.jpg',
        data: [
            {
                id: 1,
                name: 'Bathroom Vanities'
            },
            {
                id: 2,
                name: 'Bathroom Vanity Lighting'
            },
            {
                id: 3,
                name: 'Tile'
            },
            {
                id: 4,
                name: 'Showers'
            },
            {
                id: 5,
                name: 'Bathtubs'
            }
        ]
    },
]

class ProductPage extends Component {

    renderProducts = () => {
        return data.map((res, i) => {
            return (
                <Col span={8} key={i}>
                    <div className="product">
                        <img src={`/images/${res.url}`} />
                        <span className="title mylink">{res.name}</span>
                        <div className="list mt-20">
                            {
                                res.data.map((res2, i2) => {
                                    return (i2 + 1 < res.data.length) ?
                                        <p key={i2} className="mylink mb-5">{res2.name}</p> :
                                        <div key={i2}>
                                            <p className="mylink mb-5">{res2.name}</p>
                                            <p className="mylink mb-5" style={{ fontWeight: 'bold' }}>Show All {res.name} <FontAwesomeIcon className="ml-5" icon={faChevronRight} /></p>
                                        </div>
                                })}
                        </div>
                    </div>
                </Col>
            )
        })
    }
    renderCategories = () => {
        return data.map((res, i) => {
            return (
                <p key={i} className="mylink mb-5">{res.name}</p>
            )
        })
    }

    render() {
        const products = this.renderProducts();
        const categories = this.renderCategories();

        return (
            <Layout1>
                <div id="indexProduct">
                    <div className="container">
                        <Row>
                            <Col span={6} style={{ marginTop: '20px'}}>
                                <div className="categories">
                                    <h3 className="text-bold mb-20">Categories</h3>
                                    {categories}
                                </div>
                            </Col>
                            <Col span={18} style={{marginTop:0}}>
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
            </Layout1>
        )
    }

}

export default ProductPage;