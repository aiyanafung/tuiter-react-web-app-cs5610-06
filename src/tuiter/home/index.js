import React from "react";
import HomePostItem from "./home-post-item";
import homePostArray from "./homeposts";

const HomePostList = () => {
    return(
        <ul className="list-group">
            {
                homePostArray.map(homepost =>
                    <HomePostItem key={homepost._id} homepost={homepost}/>)
            }
        </ul>
    );
}
export default HomePostList;