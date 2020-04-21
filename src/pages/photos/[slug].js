import { Component } from "react";
import { dataProductPhotos } from "../../data/data";
import MyRouter from "../../const/routes";
import { FuncService } from "../../services/myService";
import { withRouter } from "next/router";
import Layout1 from "../../layouts/layout1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faArrowLeft, faLongArrowAltLeft, faChevronRight, faPaperPlane, faHeart, faThumbsUp, faCommentAlt, faComment } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Rate } from "antd";
import { List, Typography } from 'antd';

const data = [
    'Can you please share the paint color? Thank you.',
    <div className="d-flex">
        <button style={{ border: 'none' }}><FontAwesomeIcon icon={faThumbsUp} className="mr-2" /> 2 Likes</button>
        <button style={{ border: 'none' }}><FontAwesomeIcon icon={faComment} className="ml-3 mr-2" /> 2 Comments</button>
    </div>,
    <div className="d-flex">
        <img style={{ borderRadius: '50%', width: '25px', height: '25px' }} src='/images/user2.jpg' />
        <div>
            <span className="d-block ml-10 fs-13" style={{ fontWeight: 'bold' }}>Hoang Nguyen</span>
            <p className="ml-10 mt-10">
                Thanks for asking! The paint color used in this Master Bath is Sherwin Williams High Reflective White SW7757.

                Best,

                Martha O'Hara Interiors
            </p>
            <div className="d-flex" style={{color:'#00000052'}}>
                <button style={{ border: 'none', fontSize:'12px' }}><FontAwesomeIcon icon={faThumbsUp} className="mr-2" /> 2 Likes</button>
                <button style={{ border: 'none', fontSize:'12px'}}><FontAwesomeIcon icon={faComment} className="ml-3 mr-2" /> 2 Save</button>
            </div>
        </div>
    </div>,
    <div className="d-flex">
    <img style={{ borderRadius: '50%', width: '25px', height: '25px' }} src='/images/user1.jpg' />
    <div>
        <span className="d-block ml-10 fs-13" style={{ fontWeight: 'bold' }}>Hoang Nguyen</span>
        <p className="ml-10 mt-10">
            Thanks for asking! The paint color used in this Master Bath is Sherwin Williams High Reflective White SW7757.

            Best,

            Martha O'Hara Interiors
        </p>
        <div className="d-flex" style={{color:'#00000052'}}>
            <button style={{ border: 'none', fontSize:'12px' }}><FontAwesomeIcon icon={faThumbsUp} className="mr-2" /> 2 Likes</button>
            <button style={{ border: 'none', fontSize:'12px'}}><FontAwesomeIcon icon={faComment} className="ml-3 mr-2" /> 2 Save</button>
        </div>
    </div>
</div>,
];

export async function getStaticPaths() {
    const paths = dataProductPhotos.map((res, i) => `${MyRouter.Photos.href}/${res.slug}~${res.id}`)
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    return {
        props: {
            PhotoDetails: FuncService.search(dataProductPhotos, 'id', params.slug.split("~")[1])
        }
    }
}

class PhotoCategory extends Component {
    render() {
        console.log("cc: ",this.props)
        return (
            <Layout1>
                <div id="PhotoCategory" style={{ background: 'white' }}>
                    <div className="container pt-20 pb-50">
                        <Row>
                            <Col span={17}>
                                {/* Image */}
                                <div className="borderImage">
                                    <FontAwesomeIcon className="left" icon={faChevronLeft} />
                                    <FontAwesomeIcon className="right" icon={faChevronRight} />
                                    <img style={{ height: '578px' }} src={`/images/${this.props.PhotoDetails.url}`} />
                                    <div className="btns">
                                        <button className="btn--save"><FontAwesomeIcon icon={faPaperPlane} className="mr-5" /> Save</button>
                                        <button className="btn--share ml-5"><FontAwesomeIcon icon={faHeart} className="mr-5" /> Share</button>
                                    </div>
                                </div>

                                {/* Info Image */}
                                <div className="mt-20">
                                    <h3>{this.props.PhotoDetails.name}</h3>
                                    <small style={{ color: 'rgb(102,102,102)' }}>Transitional Bathroom, Minneapolis</small>
                                    <p style={{ fontWeight: '300', borderBottom: '1px solid rgb(230,230,230)' }} className="mt-10 pb-10">
                                        Martha O'Hara Interiors, Interior Design & Photo Styling | City Homes, Builder | Troy Thies, Photography Please Note: All “related,” “similar,” and “sponsored” products tagged or listed by Houzz are not actual products pictured. They have not been approved by Martha O’Hara Interiors nor any of the professionals credited. For information about our work, please contact design@oharainteriors.com.
                                    </p>

                                    {/* User */}
                                    <div className="pb-15 d-flex" style={{ borderBottom: '1px solid rgb(230,230,230)', justifyContent: 'space-between' }}>
                                        <div className="d-flex">
                                            <img style={{ borderRadius: '50%', width: '40px', height: '40px' }} src={`/images/user1.jpg`} />
                                            <div>
                                                <span className="d-block ml-10 fs-13">Truc Nguyen</span>
                                                <Rate style={{ marginLeft: '10px' }} allowHalf defaultValue={5} /> <small> 155 Review</small>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn" style={{ fontSize: '13px' }}>Follow</button>
                                        </div>
                                    </div>

                                    {/* Question Anwser */}
                                    <div className="mt-35">
                                        <div className="d-flex mb-10" style={{justifyContent:'space-between', alignItems:'center'}}>
                                            <p className="m-0"><b>Questions About This Photo (58)</b></p>
                                            <button className="btn" style={{ fontSize: '13px' }}>Ask a Question</button>
                                        </div>
                                        <div>
                                            <List
                                                size="large"
                                                header={
                                                    <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                                        <div className="d-flex">
                                                            <img style={{ borderRadius: '50%', width: '40px', height: '40px' }} src={`/images/user1.jpg`} />
                                                            <span style={{ display: 'flex' }} className="d-block ml-10 fs-13">
                                                                <div style={{ alignSelf: 'center' }}
                                                                ><b>Truc Nguyen</b>  wrote:
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <span>April 6, 2016</span>
                                                    </div>
                                                }
                                                bordered
                                                dataSource={data}
                                                renderItem={item => <List.Item>{item}</List.Item>}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </Col>
                            <Col span={7} style={{ paddingLeft: '20px' }}>
                                {/* Order Photo */}
                                <span className="d-block mb-10" style={{ marginLeft: '0px' }}>Order Photos</span>
                                <Row>
                                    {
                                        this.props.PhotoDetails.images.map((item, i) => {
                                            return (
                                                <Col span={12}>
                                                    <img className="mb-15" style={{ width: '159px', height: '159px' }} key={i} src={`/images/${item}`} />
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Layout1>
        )
    }
}
export default withRouter(PhotoCategory)