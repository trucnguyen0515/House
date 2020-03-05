import Document, {Html,Main,Head,NextScript} from 'next/document';
import MyHead from "next/head";

class MyDocument extends Document {
    render(){
        return (
            <Html>
                {/* 
                    Header from nextjs import css  
                */}
                <Head />

                {/* 
                    MyHeader custom, có thể đặt bất kì đâu để custom lấy giá trị động vd: tag <meta property="og:url"> 
                */}
                <MyHead>
                    <title>House</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </MyHead>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;