import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import Link from 'next/link';

// import "../scss/index.scss";

const Index = (props) => {
    return (
        <Fragment>
            <Navbar />
            <Link href={`/item/[title]`} as={`/item/aaaa`}>
                <a>link to Item page</a>
            </Link>
            <p>index</p>
            <style jsx>{`
                p{
                    color:red
                }
            `}
            </style>
        </Fragment>
    );
};

// Index.getStaticProps = async function({params}){
//     console.log("ok: ",params)
//     let title = "ok-pd"
//     return {
//         title
//     }
// }

export default Index;
