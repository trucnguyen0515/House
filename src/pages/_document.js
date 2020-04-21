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
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                    <link rel="icon" 
                        type="image/png" 
                        href="images/icon.png">
                    </link>
                    <style rel="stylesheet" href="https://st.hzcdn.com/res/4166/css/style?f=webfonts,houzz-bootstrap,houzzTheme,iconfont,iconGlyphs,houzz-responsive-1425px,ui,ui_wk"></style>
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