import { Component } from "react"
import Layout1 from "../../layouts/layout1"
import LoadingPage from "../../components/SharedComp/LoadingPage"
import { Breadcrumb, Col, Row } from "antd"
import { dataPhotoCatories, dataProductPhotos } from "../../data/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSlidersH } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import MyRouter from "../../const/routes"

class PhotoPage extends Component {

    state = {
        loading: false
    }

    renderBreadcrumb = () => {
        return <Breadcrumb>
            <Breadcrumb.Item>
                <h1 className="mt-10 mb-10">Home Design Ideas</h1>
            </Breadcrumb.Item>
        </Breadcrumb>
    }

    renderCategory = () => {
        return dataPhotoCatories.map((res, i) => {
            return (
                <Col span={3}>
                    <div className="itemCate mb-25">
                        <img style={{ width: '100%' }} src={`/images/${res.url}`} />
                        <span className="d-block text-center p-15 fs-14">{res.name}</span>
                    </div>
                </Col>
            )
        })
    }

    render() {
        const breadcrumb = this.renderBreadcrumb();
        const dataPhotoCategories = this.renderCategory();

        return (
            <Layout1>
                <LoadingPage isLoading={this.state.loading}>
                    <div id="PhotoPage">
                        <div className="infoCategoryPhoto">
                            <div className="container">
                                {breadcrumb}
                            </div>
                            <div className="photosCategory container">
                                <Row>
                                    {dataPhotoCategories}
                                </Row>
                            </div>
                        </div>
                        <div className="listCategoryPhoto mt-20">
                            <div className="container" style={{ boxShadow: '0 1px 3px 0 rgba(0,0,0,.08)' }}>
                                {/* Filter */}
                                <div style={{ padding: '20px', background: 'white', borderBottom: '1px solid #dddddd8c' }}>
                                    <button className="btn_filter">
                                        <div style={{ display: 'flex' }}>
                                            <FontAwesomeIcon icon={faSlidersH} />
                                            <span className="d-block ml-10">All Filters</span>
                                        </div>
                                    </button>
                                </div>
                                {/* Product Photo */}
                                <div style={{ background: 'white', padding: '20px', marginBottom: '20px' }}>
                                    <Row>
                                        {
                                            dataProductPhotos.map((res, i) => {
                                                return (
                                                    <Col span={8} key={i}>
                                                        <Link href={MyRouter.PhotoDetails.href} as={MyRouter.PhotoDetails.as(res.slug, res.id)}>
                                                            <div className="PhotoDetails">
                                                                <img src={`/images/${res.url}`} />
                                                                <h4 className="mt-10 mb-8">{res.name}</h4>
                                                                <span className="fs-13">By  <span>Nguyen Truc</span></span>
                                                            </div>
                                                        </Link>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </div>

                            </div>
                        </div>
                    </div>

                </LoadingPage>
            </Layout1>
        )
    }
}

export default PhotoPage