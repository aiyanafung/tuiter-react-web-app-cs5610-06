import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./index.css";
import EditProfile from "./edit-profile"

function ProfileComponent() {
	const profile = useSelector((state) => state.profile);
	 const dateOfBirth = new Date(profile.dateOfBirth);
    const dateJoinedArray = profile.dateJoined.split("/");
    const dateJoinedMonth = parseInt(dateJoinedArray[0]) - 1;
    const dateJoinedYear = parseInt(dateJoinedArray[1]);
    const dateJoined = new Date(dateJoinedYear,dateJoinedMonth);
    return (
        <div className="border">
             <div className="row mt-2">
                <div className="col-auto m-2">
                    <h5><i className="bi bi-arrow-left fw-bolder"></i></h5>
                </div>
                <div className="col-10">
                    <h5 className="me-0">{profile.firstName} {profile.lastName}</h5>
                    <p className="text-secondary mt-0"> 6114 tuits</p>
                </div>
            </div>
            <div className="mb-1">
                <img src={profile.bannerPicture} className="w-100 img-size" alt="..."/>
            </div>
            <div className="row">
                <div className="col-8">
                    <img src={profile.profilePicture} className="pos-relative-nudge-up-right rounded-circle
                                                                w-50 h-100" alt="..."/>
                </div>
                   <div className="col-4">
                       <Link to="./edit-profile">
                           <button onClick={()=><EditProfile/>}
                               className="float-end me-2 btn btn-light rounded-pill border fw-bolder">
                               Edit Profile
                           </button>
                       </Link>
                   </div>
            </div>
              <div className="ms-4 pos-relative-nudge-up-right">
                <div className="fw-bolder fs-5">{profile.firstName} {profile.lastName}</div>
                <div className="text-secondary fs-6">{profile.handle}</div>
                <p className="mt-2 fs-6">{profile.bio}</p>
                <div className="d-flex flex-row text-secondary">
                    <div className="me-4">
                        <i className="bi bi-geo-alt"></i>  {profile.location}
                    </div>
                    <div className="me-4">
                        <i className="bi bi-balloon"></i>
                        Born {dateOfBirth.toLocaleString('default', {month: 'long'})} {dateOfBirth.getDate()}, {dateOfBirth.getFullYear()}
                    </div>
                    <div className="me-4">
                        <i className="bi bi-calendar3"></i> Joind  {dateJoined.toLocaleString('default', {month: 'long'})} {dateJoined.getFullYear()}
                    </div>
                </div>
                <div className="d-flex flex-row mt-2">
                    <div className="text-secondary me-4"><span className="text-black fw-bolder me-1">{profile.followingCount}</span>
                        Following</div>
                    <div className="text-secondary"><span
                        className="text-black fw-bolder me-1">{profile.followersCount}</span>
                        Followers
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileComponent;