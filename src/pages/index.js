import React, { Component, Fragment } from "react";
import CarouselComp from "../components/IndexPage/Carousel";
import Layout1 from "../layouts/layout1";
import Link from "next/link";


import 'jquery';
import "../scss/index.scss";
import "antd/dist/antd.css";
import Introduce from "../components/IndexPage/Introduce";


export default class IndexPage extends Component {
    render() {
        return (
             <Layout1>
                 <div id="indexPage">
                    <CarouselComp/>
                    <div className="container pt-10 pb-40">
                        <Introduce/>
                        <div className="text-center mt-50">
                            <button className="my-btn">Get Started</button>
                        </div>
                    </div>
                 </div>
            </Layout1>

        );
    }
}
