import { Row, Col } from "antd";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import MyRouter from "../../const/routes";
import { MyService } from "../../services/myService";
import { Rate } from 'antd';


const CateComp1 = ({ SoLuongHienThiToiDa, TenHienThiToiDa, categoriesChild, categoriesChild_2, callback }) => {
    let count = 0;
    return (
        <div style={{background:'white'}}>
        <div className="container">
            {categoriesChild.map((res, i) => {
                const categoriesChild_2_filter = categoriesChild_2.filter(val => {
                    let kq = val.parent.filter(x => {
                        if (x === res.id && count < SoLuongHienThiToiDa + TenHienThiToiDa) {
                            count++
                            return true;
                        }
                        return false
                    })
                    return kq.length > 0 ? true : false
                })
                return (
                    <div className="pb-40" key={i}>
                        <Link href={MyRouter.ProductDetail.href} as={MyRouter.ProductDetail.as(res.slug)}>
                            <h2 className="fs-19 mylink" onClick={() => callback("loading")}>{res.name}</h2>
                        </Link>
                        <Row>
                            {renderItems_categoriesChild(SoLuongHienThiToiDa, TenHienThiToiDa, categoriesChild_2_filter, callback)}
                            <Col span={6} style={{ marginTop: "12px" }}>
                                {renderRemainItems_categoriesChild(SoLuongHienThiToiDa, TenHienThiToiDa, res, categoriesChild_2, categoriesChild_2_filter, callback)}
                            </Col>
                        </Row>
                    </div>
                );
            })
            }
        </div>
        </div>
    )
}
const CateComp2 = ({ SoLuongHienThiToiDa, TenHienThiToiDa, categoriesChild, callback }) => {
    return (
        <div style={{background:'white'}}>
        <div className="container">
        <div className="pb-20 container">
            <Row>
                {renderItems_categoriesChild(SoLuongHienThiToiDa, TenHienThiToiDa, categoriesChild, callback)}
                <Col span={6} style={{ marginTop: "12px" }}>
                    {renderRemainItems_categoriesChild(SoLuongHienThiToiDa, TenHienThiToiDa, null, categoriesChild, categoriesChild, callback)}
                </Col>
            </Row>
        </div>
        </div>
        </div>
    )
}
const CateComp3 = ({ categoriesChild, callback }) => {
    return (
        <div style={{background:'white'}}>
        <div className="container">
            <Row style={{ paddingTop: '20px' }}>
                {
                    categoriesChild.map((res, i) => {
                        return (
                            <Col span={4} key={i}>
                                <Link href={MyRouter.ProductDetail.href} as={MyRouter.ProductDetail.as(res.slug)}>
                                    <div className="cateComp" onClick={() => callback(1)}>
                                        <img src={`/images/${res.url}`} style={{ width: '100%' }} />
                                        <div className="text-center p-15 titleChild">{res.name}</div>
                                    </div>
                                </Link>
                            </Col>
                        )
                    })
                }
            </Row>
        </div></div>
    )
}
const ProductsList = ({ productsChild, callback }) => {
    return (
        <div className="productsList mb-30 mt-15 container" style={{boxShadow:'0 1px 3px 0 rgba(0,0,0,.08)'}}>
            {/* Filter */}
            <div style={{ padding: '20px', background: 'white', borderBottom: '1px solid #dddddd8c' }}>
                <button className="btn_filter">
                    <div style={{ display: 'flex' }}>
                        <FontAwesomeIcon icon={faSlidersH} />
                        <span className="d-block ml-10">All Filters</span>
                    </div>
                </button>
            </div>
            {/* Products */}
            <div style={{background:'white'}}>
                <Row>
                    {productsChild.map((res, i) => {
                        return (
                            <Col span={6} key={i}>
                                <Link href={MyRouter.ProductsList.href} as={MyRouter.ProductsList.as(res.slug, res.id)}>
                                    <div className="productItems" onClick={() => callback("loading")}>
                                        <img src={`/images/${res.url}`} />
                                        <div className="info">
                                            <span className="d-block name">{res.name}</span>
                                            <span className="d-block price">{MyService.dotsNumber(res.price)}</span>
                                            <Rate allowHalf defaultValue={2.5} />
                                        </div>
                                        {res.sale ? <small className="sale">Sale</small> : null}
                                    </div>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>

    )
}
const renderItems_categoriesChild = (SoLuongHienThiToiDa, TenHienThiToiDa, categoriesChild_2_filter, callback) => {
    if (categoriesChild_2_filter.length > 0) {
        return categoriesChild_2_filter.map((res, i) => {
            return i + 1 < SoLuongHienThiToiDa ? (
                <Col span={6} style={{ marginTop: '12px' }} key={i}>
                    <Link href={MyRouter.ProductDetail.href} as={MyRouter.ProductDetail.as(res.slug)}>
                        <div className="itemImage">
                            <img className="imgItem" src={`/images/${res.url}`} style={{ cursor: 'pointer' }} onClick={() => callback(1)} />
                            <span className="title" style={{ width: '120px', display: 'block' }}>{res.name}</span>
                        </div>
                    </Link>

                </Col>
            ) : null
        })
    }
    return null
}
const renderRemainItems_categoriesChild = (SoLuongHienThiToiDa, TenHienThiToiDa, Parent, categoriesChild_2, categoriesChild_2_filter, callback) => {
    if (categoriesChild_2_filter.length > 0 && categoriesChild_2_filter.length === SoLuongHienThiToiDa) {
        return (
            <Link href="/">
                <div className="itemImage">
                    <img className="imgItem" src={`/images/${categoriesChild_2_filter[SoLuongHienThiToiDa - 1].url}`} style={{ cursor: 'pointer' }} onClick={() => callback(1)} />
                    <span className="title" style={{ width: '120px', display: 'block' }}>{categoriesChild_2_filter[SoLuongHienThiToiDa - 1].name}</span>
                </div>
            </Link>
        )
    }
    if (categoriesChild_2_filter.length > 0 && categoriesChild_2_filter.length > SoLuongHienThiToiDa) {
        return categoriesChild_2_filter.map((res, i) => {
            // Tối đa tổng số lương nhìn thấy === tổng số sản phẩm (Show hết)
            if (i + 1 >= SoLuongHienThiToiDa && i + 1 === categoriesChild_2.length) {
                return (
                    <Col key={i} span={24} style={{ marginTop: '12px' }} key={i}>
                        <Link href="/">
                            <p className="mylink mt-8 mb-0 fs-16" onClick={() => callback(1)}>{res.name}</p>
                        </Link>
                    </Col>
                )
            }
            // Tối đa tổng số lượng nhìn thấy, còn dư (Show all)
            if (i + 1 >= SoLuongHienThiToiDa && i + 1 === SoLuongHienThiToiDa + TenHienThiToiDa & i + 1 !== categoriesChild_2.length) {
                return (
                    <Col key={i} span={24} style={{ marginTop: '12px' }} key={i}>
                        <Link href={MyRouter.ProductDetail.href} as={MyRouter.ProductDetail.as(Parent.slug)}>
                            <p className="mylink mt-8 mb-0 fs-16 font-bold" onClick={() => callback(1)}>Show All {Parent.name} <FontAwesomeIcon icon={faChevronRight} /> </p>
                        </Link>
                    </Col>
                )
            }
            if (i + 1 >= SoLuongHienThiToiDa && i + 1 !== SoLuongHienThiToiDa + TenHienThiToiDa && i + 1 !== categoriesChild_2.length) {
                return (
                    <Col key={i} span={24} style={{ marginTop: '12px' }} key={i}>
                        <Link href="/">
                            <p className="mylink mt-8 mb-0 fs-16" onClick={() => callback(1)}>{res.name}</p>
                        </Link>
                    </Col>
                )
            }


        })
    }
    return null
}

/*
    CateComp1 
        - SoLuongHienThiToiDa   : 
        - TenHienThiToiDa       :
        - Product               : Sản phẩm category F1
        - categoriesChild         : danh sách sản phẩm con của product F2
        - categoriesChild_2       : danh sách sản phẩm con của con product F3

*/
const CategoryComp = ({ product, categoriesChild, categoriesChild_2, productsChild, callback }) => {
    const choose = {
        0: <CateComp1 SoLuongHienThiToiDa={4} TenHienThiToiDa={2} categoriesChild={categoriesChild} categoriesChild_2={categoriesChild_2} callback={res => callback(res)} />,
        1: <CateComp2 SoLuongHienThiToiDa={categoriesChild.length} TenHienThiToiDa={0} categoriesChild={categoriesChild} callback={res => callback(res)} />,
        2: <CateComp3 categoriesChild={categoriesChild} callback={res => callback(res)} />,
        3: <ProductsList productsChild={productsChild} callback={res => callback(res)} />
    };
    return choose[product.typeShow];
};

export default CategoryComp;
