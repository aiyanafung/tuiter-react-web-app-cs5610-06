import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import TuitItem from "./tuitItem";
import {findTuitsThunk}
  from "../../services/tuits-thunks";

const TuitsList = () => {

 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(findTuitsThunk())
 }, [])
 const {tuits, loading} = useSelector(
   state => state.tuitsData)
 return(
   <ul className="list-group">
     {
       loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }
      {
         tuits.map(tuit =>
             <TuitItem
                 key={tuit._id} tuit={tuit}/> )
      }
   </ul>
 );
};
export default TuitsList;