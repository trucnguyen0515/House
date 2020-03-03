import Document, {Html,Main,NextScript} from 'next/document';
import Head from 'next/head'

class MyDocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                    <title>House</title>
                    <link rel="stylesheet" href="/_next/static/style.css"></link>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;