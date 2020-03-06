import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo, faShoppingBasket, faUserAstronaut, faBookReader, faGift } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import React, { Component } from 'react';


const data = {
    1: [
        {
            title:'kitchen & dining',
            data: ['kitchen','dining room','pantry','great room']
        },
        {
            title:'bed & bath',
            data: ['bath room','powder room','bedroom','baby & kids']
        },
        {
            title:'living',
            data: ['living room','family room','sunroom','home theater']
        },
        {
            title:'outdoor',
            data: ['landscape','Patio','Deck','Pool']
        },
        {
            title:'more room',
            data: ['exterior','entry','hall','home office']
        },
    ],
}

// stt la so thu tu cua div 
const alignDivMenu = (div,stt) => {
    $(div).find(".menu").css({'display':'block'})
    if(stt >= 1 && stt <= 3){
        let px;
        px = stt === 1 ? '-1px' : stt === 2 ? '-140px' : stt === 3 ? '-400px' : '0'
        $(div).find(".menu").css({
            left: px
        })
    }
    if(stt > 3 && stt <= 5){
        let px;
        px = stt === 5 ? '-1px' : '-120px'
        $(div).find(".menu").css({
            right: px
        })
    }
}
const HoverMenu = () => {
    $("#MegaMenu .item").hover(function () {
        $(this).addClass("hoverMenu")
        // get stt
        let stt = $(this).attr("class").split(" ")[1];
        stt = parseInt(stt[stt.length - 1]);
        // line transparent
        $(this).append(`
            <div class="line"></div>
        `)
        //css
        alignDivMenu(this,stt);
        // debugger
    }, function() {
        $("#MegaMenu .line").remove();
        $(this).removeClass("hoverMenu");
        $(this).find(".menu").css({'display':'none'})
    })
}

export default class MegaMenu extends Component {

    componentDidMount(){
        HoverMenu();
    }
    
    render() {
        return (
            <div id="MegaMenu" className="container">
                <div className="parent">
                    <div className="item item1">
                        <FontAwesomeIcon icon={faPhotoVideo} />
                        <span>photos</span>
                        <div className="menu">
                            <div style={{display:'flex'}}>
                                {
                                    data[1].map((res,j) => {
                                        return (
                                            <div key={j} className="itemMenu">
                                                <h4 className="title mb-10">{res.title}</h4>
                                                <ul style={{marginBottom:0,listStyleType:'none'}}>
                                                    {
                                                        res.data.map((res2,i) => {
                                                            return <p key={i} className="m-0"><Link  href="/aa"><small className="mylink">{res2}</small></Link></p>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                    </div>
                    <div className="item item2">
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        <span>shop by department</span>
                        <div className="menu">
                            <div style={{display:'flex'}}>
                                {
                                    data[1].map((res,j) => {
                                        return (
                                            <div key={j} className="itemMenu">
                                                <h4 className="title mb-10">{res.title}</h4>
                                                <ul style={{marginBottom:0,listStyleType:'none'}}>
                                                    {
                                                        res.data.map((res2,i) => {
                                                            return <p key={i} className="m-0"><Link  href="/aa"><small className="mylink">{res2}</small></Link></p>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                    </div>
                    <div className="item item3">
                        <FontAwesomeIcon icon={faUserAstronaut} />
                        <span>shop by department</span>
                        <div className="menu">
                            <div style={{display:'flex'}}>
                                {
                                    data[1].map((res,j) => {
                                        return (
                                            <div key={j} className="itemMenu">
                                                <h4 className="title mb-10">{res.title}</h4>
                                                <ul style={{marginBottom:0,listStyleType:'none'}}>
                                                    {
                                                        res.data.map((res2,i) => {
                                                            return <p key={i} className="m-0"><Link  href="/aa"><small className="mylink">{res2}</small></Link></p>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                    </div>
                    <div className="item item4">
                        <FontAwesomeIcon icon={faBookReader} />
                        <span>stories & advice</span>
                        <div className="menu">
                            <div style={{display:'flex'}}>
                                {
                                    data[1].map((res,j) => {
                                        return (
                                            <div key={j} className="itemMenu">
                                                <h4 className="title mb-10">{res.title}</h4>
                                                <ul style={{marginBottom:0,listStyleType:'none'}}>
                                                    {
                                                        res.data.map((res2,i) => {
                                                            return <p key={i} className="m-0"><Link  href="/aa"><small className="mylink">{res2}</small></Link></p>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                    </div>
                    <div className="item item5">
                        <FontAwesomeIcon icon={faGift} />
                        <span>SALE</span>
                        <div className="menu">
                            <div style={{display:'flex'}}>
                                {
                                    data[1].map((res,j) => {
                                        return (
                                            <div key={j} className="itemMenu">
                                                <h4 className="title mb-10">{res.title}</h4>
                                                <ul style={{marginBottom:0,listStyleType:'none'}}>
                                                    {
                                                        res.data.map((res2,i) => {
                                                            return <p key={i} className="m-0"><Link  href="/aa"><small className="mylink">{res2}</small></Link></p>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
