import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
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
           dispatch(updateTuitThunk({
               ...tuit,
               likes: tuit.likes + 1,
               liked: true
           }));
       }
       const unlikeTuitHandler = (tuit) => {
           dispatch(updateTuitThunk({
               ...tuit,
               likes: tuit.likes - 1,
               liked: false
           }));
       }
       return(
           <div className="row text-secondary mt-2">
               <div className="col"><i className="bi bi-chat"></i> {tuit.replies}</div>
               <div className="col"><i className="bi bi-repeat"></i> {tuit.retuits}</div>
               <div className="col">
                   {tuit.liked && <i onClick={() => unlikeTuitHandler(tuit)} className="bi bi-heart-fill text-danger"></i>}
                   {!tuit.liked && <i onClick={() => likeTuitHandler(tuit)} className="bi bi-heart"></i>}
                   {tuit.likes}
               </div>
               <div className="col"><i className="bi bi-upload"></i></div>
           </div>
       )
}
export default TuitStats;