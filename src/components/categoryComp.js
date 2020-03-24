import { Row, Col } from "antd";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import MyRouter from "../const/routes";

const CateComp1 = ({ SoLuongHienThiToiDa, TenHienThiToiDa, productsChild, productsChild_2 ,callback}) => {
    let count = 0;
    return productsChild.map((res, i) => {
        const productsChild_2_filter = productsChild_2.filter(val => {
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
            <div className="mb-40" key={i}>
                <h2 className="fs-19 mt-25">{res.name}</h2>
                <Row>
                    {renderItems_productsChild(SoLuongHienThiToiDa, TenHienThiToiDa, productsChild_2_filter,callback)}
                    <Col span={6} style={{ marginTop: "12px" }}>
                        {renderRemainItems_productsChild(SoLuongHienThiToiDa, TenHienThiToiDa, res.name, productsChild_2, productsChild_2_filter,callback)}
                    </Col>
                </Row>
            </div>
        );
    });
}
const CateComp2 = ({ SoLuongHienThiToiDa, TenHienThiToiDa, productsChild ,callback}) => {
    return (
        <div className="mb-20">
            <Row>
                {renderItems_productsChild(SoLuongHienThiToiDa, TenHienThiToiDa, productsChild,callback)}
                <Col span={6} style={{ marginTop: "12px" }}>
                    {renderRemainItems_productsChild(SoLuongHienThiToiDa, TenHienThiToiDa, null, productsChild, productsChild,callback)}
                </Col>
            </Row>
        </div>
    )
}
const CateComp3 = ({productsChild, callback}) => {
    return (
        <Row>
            {
                productsChild.map((res,i) => {
                    return (
                        <Col span={4} key={i}>
                            <Link href="/">
                                <div className="cateComp" onClick={() => callback(1)}>
                                    <img src={`/images/${res.url}`} style={{width:'100%'}}/>
                                    <div className="text-center p-15 titleChild mt-5">{res.name}</div>
                                </div>
                            </Link>
                        </Col>
                    )
                })
            }
        </Row>
    )
}
const renderItems_productsChild = (SoLuongHienThiToiDa, TenHienThiToiDa, productsChild_2_filter,callback) => {
    if (productsChild_2_filter.length > 0) {
        return productsChild_2_filter.map((res, i) => {
            return i + 1 < SoLuongHienThiToiDa ? (
                <Col span={6} style={{ marginTop: '12px' }} key={i}>
                    <Link href={MyRouter.ProductDetail.href} as={MyRouter.ProductDetail.as(res.slug)}>
                        <div className="itemImage">
                                <img className="imgItem" src={`/images/${res.url}`} style={{ cursor: 'pointer' }} onClick={() => callback(1)}/>
                            <span className="title" style={{ width: '120px', display: 'block' }}>{res.name}</span>
                        </div>
                    </Link>

                </Col>
            ) : null
        })
    }
    return null
}
const renderRemainItems_productsChild = (SoLuongHienThiToiDa, TenHienThiToiDa, nameParent, productsChild_2, productsChild_2_filter,callback) => {
    if (productsChild_2_filter.length === SoLuongHienThiToiDa) {
        return (
            <Link href="/">
                <div className="itemImage">
                    <img className="imgItem" src={`/images/${productsChild_2_filter[SoLuongHienThiToiDa - 1].url}`} style={{ cursor: 'pointer' }} onClick={() => callback(1)}/>
                    <span className="title" style={{ width: '120px', display: 'block' }}>{productsChild_2_filter[SoLuongHienThiToiDa - 1].name}</span>
                </div>
            </Link>
        )
    }
    if (productsChild_2_filter.length > SoLuongHienThiToiDa) {
        return productsChild_2_filter.map((res, i) => {
            // Tối đa tổng số lương nhìn thấy === tổng số sản phẩm (Show hết)
            if (i + 1 >= SoLuongHienThiToiDa && i + 1 === productsChild_2.length) {
                return (
                    <Col key={i} span={24} style={{ marginTop: '12px' }} key={i}>
                        <Link href="/">
                            <p className="mylink mt-8 mb-0 fs-16" onClick={() => callback(1)}>{res.name}</p>
                        </Link>
                    </Col>
                )
            }
            // Tối đa tổng số lượng nhìn thấy, còn dư (Show all)
            if (i + 1 >= SoLuongHienThiToiDa && i + 1 === SoLuongHienThiToiDa + TenHienThiToiDa & i + 1 !== productsChild_2.length) {
                return (
                    <Col key={i} span={24} style={{ marginTop: '12px' }} key={i}>
                        <Link href="/">
                            <p className="mylink mt-8 mb-0 fs-16 font-bold" onClick={() => callback(1)}>Show All {nameParent} <FontAwesomeIcon icon={faChevronRight} /> </p>
                        </Link>
                    </Col>
                )
            }
            if (i + 1 >= SoLuongHienThiToiDa && i + 1 !== SoLuongHienThiToiDa + TenHienThiToiDa && i + 1 !== productsChild_2.length) {
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
        - productsChild         : danh sách sản phẩm con của product F2
        - productsChild_2       : danh sách sản phẩm con của con product F3

*/
const CategoryComp = ({ product, productsChild, productsChild_2, callback}) => {
    const choose = {
        0: <CateComp1 SoLuongHienThiToiDa={4} TenHienThiToiDa={2} productsChild={productsChild} productsChild_2={productsChild_2} callback={res => callback(res)}/>,
        1: <CateComp2 SoLuongHienThiToiDa={productsChild.length} TenHienThiToiDa={0} productsChild={productsChild} callback={res => callback(res)}/>,
        2: <CateComp3 productsChild={productsChild} callback={res => callback(res)}/>
    };
    return choose[product.typeShow];
};

export default CategoryComp;
