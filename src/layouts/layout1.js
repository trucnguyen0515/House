import { Fragment } from "react";
import Header from "./layout1Comp/Header";
import MegaMenu from "./layout1Comp/MegaMenu";
import Footer from "./layout1Comp/Footer";

const Layout1 = (props) => {
    return (
       <Fragment>
            <Header/>
            <MegaMenu/>

            {props.children}
            
            <Footer/>
        </Fragment>
    )
}

export default Layout1;