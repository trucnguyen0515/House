import { Fragment } from "react";
import Header from "../components/Header";
import MegaMenu from "../components/MegaMenu";
import Footer from "../components/Footer";

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