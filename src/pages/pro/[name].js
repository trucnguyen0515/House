import { Component } from "react";
import Layout1 from "../../layouts/layout1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faHeart, faUpload, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "antd";


class profileUser extends Component {
    render() {
        return (
            <Layout1>
                <div id="profileUser" className="container" style={{ backgroundColor: 'white', position: 'relative' }}>
                    {/* TOP */}
                    <div style={{ position: 'relative' }}>
                        <img style={{ width: '100%', height: '201px' }} src='/images/proUser.jpg' />
                        <div className="overlay"></div>
                    </div>
                    <div className="p-20" style={{ position: 'absolute', display: 'flex', top: '45px', width: '100%' }}>
                        {/* img */}
                        <div className="profilePhoto">
                            <img style={{ width: '100%' }} src='/images/imgUser.jpg' />
                        </div>
                        {/* info */}
                        <div className="profilePhoto2 pl-20 mt-40" style={{ width: 'calc(100% - 185px)' }}>
                            <div style={{ color: 'white' }}>
                                <h1 style={{ color: 'white' }}>Golden Folder</h1>
                                <span className="d-block">Review Me <FontAwesomeIcon className="ml-2" style={{ fontSize: '12px' }} icon={faChevronRight} /></span>
                                <span className="d-block mt-2">Hồ Chí Minh, Alaska, United States</span>
                            </div>

                            <div style={{ borderBottom: '1px solid #e6e6e6' }} className="mt-7">
                                <ul>
                                    <li>About Us</li>
                                    <li>Project</li>
                                    <li>Ideabooks</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* BOT */}
                    <div className="mt-45 p-20 d-flex">
                        <div style={{ flexBasis: '185px' }}>
                            <div>
                                <p className="mb-0">Contact Info</p>
                                <div style={{ color: '#666' }} className="mt-3">
                                    <small className="d-block">nguyen tienhoang</small>
                                    <small className="d-block">Hồ Chí Minh, Alaska</small>
                                    <small className="d-block">United States</small>
                                </div>
                            </div>
                            <div className="mt-15">
                                <p className="mb-0">Category</p>
                                <div style={{ color: '#666' }} className="mt-3">
                                    <small className="d-block">Appliances</small>
                                </div>
                            </div>
                            <div className="mt-15">
                                <button className="btn mt-10" style={{fontSize:'13px',width:'100%',height:'40px'}}><FontAwesomeIcon icon={faHeart}/> Save</button>
                                <button className="btn mt-10" style={{fontSize:'13px',width:'100%',height:'40px'}}><FontAwesomeIcon icon={faUpload}/> Share</button>
                                <button className="btn mt-10" style={{fontSize:'13px',width:'100%',height:'40px'}}><FontAwesomeIcon icon={faPlusCircle}/> Follow</button>
                            </div>
                            <div>
                                <div className="mt-15 d-flex" style={{border:'1px solid #e6e6e6'}}>
                                    <div style={{width:'50%', borderRight:'1px solid #e6e6e6'}}>
                                        <p className="text-center mb-3 mt-8">0</p>
                                        <p className="text-center" style={{ color: '#666' }}>Follower</p>
                                    </div>
                                    <div style={{width:'50%'}}>
                                        <p className="text-center mb-3 mt-8">0</p>
                                        <p className="text-center" style={{ color: '#666' }}>Following</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ flexBasis: 'calc(100% - 185px)' }} className="pl-20">
                            <div className="pt-10 pb-30" style={{borderBottom:'1px solid #e6e6e6'}}>
                                <b className="mt-5">Services Provided</b>
                                <p className="mt-3">Appliance Sales</p>
                            </div>
                            <div className="pt-20 pb-30">
                                <b className="d-block mb-14">1 Project for Golden Folder</b>
                                <Row className="mt-10">
                                    <Col span={7}>
                                        <div className="card">
                                            <img src="/images/project1.jpg" style={{width:'100%'}}/>
                                            <div className="p-15">
                                                <p className="mt-10 mb-5"><b>Project 01</b></p>
                                                <p><small>8 Photos</small></p>
                                            </div>
                                            
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            
                        </div>

                    </div>

                </div>
            </Layout1>
        )
    }
}

export default profileUser