import { Row, Col, Rate } from "antd"
import { MyService } from "../../services/myService"
import { InputNumber } from 'antd';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';


const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const ProductComp = ({ productDetail }) => {
    return (
        <div style={{ background: 'white' }}>
            <div className="container">
                <Row>
                    <Col span={14}>
                        <div>
                            <img style={{ width: '100%' }} src={`/images/${productDetail.url}`} />
                        </div>
                    </Col>
                    <Col span={10}>
                        <div>
                            <h1>{productDetail.name}</h1>
                            <small> By <span style={{ textDecoration: 'underline' }}>Truc Nguyen</span></small>
                            <br />
                            <Rate allowHalf defaultValue={2.5} /> <small style={{ textDecoration: 'underline' }}>50 Reviews</small>
                            <br />
                            <br />
                            {productDetail.sale ? <small className="sale2">Sale</small> : null}
                            <br />
                            <p className="mt-5 mb-0" style={{ fontSize: '1.875rem', fontWeight: '500' }}>
                                {MyService.dotsNumber(productDetail.price)}
                            </p>
                            <div>
                                <span style={{ textDecoration: 'line-through' }}>{MyService.dotsNumber(productDetail.price + parseInt(productDetail.sale))}</span>
                                <span className="primaryColor"><b className="ml-10 mr-5">60%</b>Off</span>
                            </div>
                            <div className="mt-20" style={{ display: 'flex' }}>
                                <InputNumber style={{ fontWeight: '500', flexGrow: '1',height:'53px' }} formatter={value => `Qty: ${value}`} min={1} max={10} defaultValue={3} />
                                <button className="my-btn ml-20" style={{ borderRadius: '5px', fontSize: '1rem', flexGrow: '20' }}>Add to Cart</button>
                            </div>
                            <Collapse className="mt-20" accordion
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                            >
                                <Panel header={<b>Product Description</b>} key="1">
                                    <p>{text}</p>
                                </Panel>
                                <Panel header={<b>Product Specifications</b>} key="2">
                                    <p>{text}</p>
                                </Panel>
                                <Panel header={<b>Shipping and Returns</b>}key="3">
                                    <p>{text}</p>
                                </Panel>
                            </Collapse>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default ProductComp