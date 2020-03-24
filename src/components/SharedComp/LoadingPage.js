import { Spin } from 'antd';

const runCSS = (bool) => {
    if(typeof window !== 'undefined'){
        bool ?
        document.querySelector("#__next").style.overflow = "hidden" : 
        document.querySelector("#__next").style.overflow = "auto"   
    }
    return null
}


const LoadingPage = ({isLoading = false,children}) => {
    runCSS(isLoading);
    return isLoading ? (
        <div className="overlay">
            <div className="blur"></div>
            <Spin size="large" className="iconSpinner"/>
            {children}
        </div>
    ) : children
}

export default LoadingPage;