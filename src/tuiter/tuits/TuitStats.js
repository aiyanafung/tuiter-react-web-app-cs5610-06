import React from "react";
import {likeTuit, unlikeTuit} from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        tuit = {
            "replies": 1,
            "retuits": 2,
            "likes": 54,
        }
    }
) => {
    const dispatch = useDispatch();
    const likeTuitHandler = (tuit) => {
        dispatch(likeTuit(tuit));
    }
    const unlikeTuitHandler = (tuit) => {
        dispatch(unlikeTuit(tuit));
    }
    return(
        <div className="row text-secondary mt-2">
            <div className="col"><i className="bi bi-chat"></i> {tuit.replies}</div>
            <div className="col"><i className="bi bi-repeat"></i> {tuit.retuits}</div>
            <div className="col ">
                {tuit.liked && <i onClick={() => unlikeTuitHandler(tuit)} className="bi bi-heart-fill text-danger me-1"></i>}
                {!tuit.liked && <i onClick={() => likeTuitHandler(tuit)} className="bi bi-heart me-1"></i>}
                {tuit.likes}
            </div>
            <div className="col"><i className="bi bi-upload"></i></div>
        </div>
    )
}
export default TuitStats;