import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import {Link} from "react-router-dom";

function EditProfile() {
   const profile = useSelector((state) => state.profile);
   const arrayDOB = profile.dateOfBirth.split('/');
   const DOB = arrayDOB[2] + '-' + arrayDOB[0] + '-' + arrayDOB[1];

   const [firstName, setFirstName] = useState(profile.firstName);
   const [lastName, setLastName] = useState(profile.lastName);
   const [bio, setBio] = useState(profile.bio);
   const [location, setLocation] = useState(profile.location);
   const [website, setWebsite] = useState(profile.website);
   const [dateOfBirth, setDateOfBirth] = useState(DOB);
   const dispatch = useDispatch();
   const saveEdit = () => {
          dispatch(updateProfile({...profile, firstName: firstName, lastName: lastName,
              bio: bio, location: location, website: website,
              dateOfBirth: dateOfBirth}));
    }
   return(
     <div className="border">
        <div className="row m-2">
            <div className="col-auto">
                <Link to="/tuiter/profile">
                    <h5><i className="bi bi-x-lg fw-bolder"></i></h5>
                </Link>
            </div>
            <div className="col-8">
                <h5>Edit profile</h5>
            </div>
            <div className="col-3">
                <Link to="/tuiter/profile">
                    <button onClick={saveEdit}
                            className="float-end btn btn-dark rounded-pill fw-bolder">Save</button>
                </Link>
            </div>
        </div>
        <div className="mb-2">
            <img src={profile.bannerPicture} className="w-100 img-size p-0" alt="..."/>
        </div>
        <div className="row">
            <div className="col-8">
                <img src={profile.profilePicture} className="pos-relative-nudge-up-right rounded-circle
                                                            w-50 h-100" alt="..."/>
            </div>
        </div>
        <div className="ms-4 pos-relative-nudge-up-right">
            <div className="d-inline-flex">
                <div className="form-floating mb-4 me-3">
                    <input className="form-control w-auto me-3" id="floatingFirstName" placeholder="first name"
                           onChange={(e) => setFirstName(e.target.value)}
                           value={firstName}/>
                    <label htmlFor="floatingFirstName">First Name</label>
                </div>
                <div className="form-floating form-inline mb-4 me-3">
                    <input className="form-control w-auto" id="floatingLastName" placeholder="last name"
                           onChange={(e) => setLastName(e.target.value)}
                           value={lastName}/>
                    <label htmlFor="floatingLastName">Last Name</label>
                </div>
            </div>

            <div className="form-floating mb-4 me-3">
                <textarea className="form-control input-lg" id="floatingBio" placeholder="Bio" rows="4"
                          onChange={(e) => setBio(e.target.value)}
                          value={bio}/>
                    <label htmlFor="floatingBio">Bio</label>
            </div>
            <div className="form-floating mb-4 me-3">
                <input className="form-control" id="floatingLocation" placeholder="Location"
                       onChange={(e) => setLocation(e.target.value)}
                       value={location}/>
                <label htmlFor="floatingLocation">Location</label>
            </div>
            <div className="form-floating mb-4 me-3">
                <input className="form-control" id="floatingWebsite" placeholder="website"
                       onChange={(e) => setWebsite(e.target.value)}
                       value={website}/>
                <label htmlFor="floatingWebsite">Website</label>
            </div>
            <div className="form-floating mb-5 me-3">
                <input type="date" className="form-control w-50" id="floatingDate" placeholder="Birth date"
                        onChange={(e) => setDateOfBirth(e.target.value)}
                       value={dateOfBirth}/>
                <label htmlFor="floatingDate">Birth date</label>
            </div>
            <div className="row">
                <div className="col-10">
                    Switch to professional
                </div>
                <div className="col-2">
                    <i className="bi bi-chevron-right float-end me-3"></i>
                </div>
            </div>
        </div>
    </div>
   )
}
export default EditProfile;