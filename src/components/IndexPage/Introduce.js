import { Row, Col } from 'antd';


const Introduce = () => {
    return (
        <div id="Introduce">
            <h1>Create the home you've always wanted</h1>
            <div style={{margin:'0 auto',maxWidth:'980px'}}>
                <Row>
                    <Col span={8}>
                        <div className="text-center" style={{padding:'0 20px'}}>
                            <span className="hp-visitor-block-item__icon hzi-font hzi-Findideas"></span>
                            <h2>Discover design ideas</h2>
                            <span className="des">Browse more than 20 million photos and filter based on your taste</span>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="text-center" style={{padding:'0 20px'}}>
                            <span className="hp-visitor-block-item__icon hzi-font hzi-FindPros"></span>
                            <h2>Find home professionals</h2>
                            <span className="des">Connect with local professionals who can help with your project</span>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="text-center" style={{padding:'0 20px'}}>
                            <span className="hp-visitor-block-item__icon hzi-font hzi-FindProducts"></span>
                            <h2>Shop for your home</h2>
                            <span className="des">Decorate and design with products from our curated collection</span>
                        </div>
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}

export default Introduce;