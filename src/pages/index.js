


// import 'jquery';

import React, { Component, Fragment } from "react";
import CarouselComp from "../components/IndexPage/Carousel";
import Layout1 from "../layouts/layout1";
import Link from "next/link";


import Introduce from "../components/IndexPage/Introduce";
import MyRouter from "../const/routes";



export async function getStaticProps({ params }) {
    return {props:{a:'ok'}}
}

export default class IndexPage extends Component {
    render() {
        return (
             <Layout1>
                 <div id="indexPage" style={{background:'white'}}>
                    <CarouselComp/>
                    <div className="container pt-10 pb-40">
                        <Introduce/>
                        <div className="text-center mt-50">
                            <Link href={MyRouter.Products.href}>
                                <button className="my-btn">Get Started</button>
                            </Link>
                        </div>
                    </div>
                 </div>
            </Layout1>
        );
    }
}
