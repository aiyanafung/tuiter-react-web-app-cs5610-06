import React from "react";
import {Link} from "react-router-dom";
const HomePostItem = (
    {
        homepost = {
            "avatar": "/tuiter/images/elonmusk.jpg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "tuit": "Amazing show about <a href='#'>@Inspiration4x</a> mission!",
            "image": "/tuiter/images/inspiration.jpg",
            "cardTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "cardText": "From training to launch to landing, this all-access ducuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "cardLink": "<a class='wd-noLinkDecor' href='netflix.com'>netflix.com</a>",
            "comment": "4.2k",
            "retuit": "3.5k",
            "like": "37.5k"
        }
    }
) => {
    return(
        <li className="list-group-item border-bottom border-0">
            <div className="row">
                <div className="col-2 pe-0">
                    <img className="rounded-circle" src={homepost.avatar} width="100%" alt="..."/>
                </div>
                <div className="col-10">
                    <div className="d-flex justify-content-between">
                        <div className="fw-bolder">{homepost.userName} <i className="bi bi-check-circle-fill text-primary me-1"></i><span
                            className="fw-normal text-secondary">@{homepost.handle} • {homepost.time}</span></div>
                        <i className="bi bi-three-dots fw-bold wd-flex-noWrap"></i>
                    </div>
                    <div>{homepost.tuit}<Link to="#" className="text-decoration-none ms-1">{homepost.tuitLink}</Link></div>
                    <div className="card border-secondary mt-2">
                        <img src={homepost.image} className="card-img-top border-bottom border-secondary" alt="..."/>
                        {homepost.cardTitle &&
                            <div className="card-body">
                                <div className="card-title ms-2 fw-bolder">{homepost.cardTitle}</div>
                                <p className="card-text ms-2">{homepost.cardText}</p>
                                <i className="bi bi-link-45deg ms-1"></i><Link to={homepost.cardLink} className="ms-1 text-decoration-none">{homepost.cardLink}</Link>
                            </div>
                        }
                    </div>
                    <div className="row text-secondary mt-2">
                        <div className="col"><i className="bi bi-chat"></i> {homepost.comment}</div>
                        <div className="col"><i className="bi bi-repeat"></i> {homepost.retuit}</div>
                        <div className="col"><i className="bi bi-heart"></i> {homepost.like}</div>
                        <div className="col"><i className="bi bi-upload"></i></div>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default HomePostItem;