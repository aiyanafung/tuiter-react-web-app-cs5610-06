import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
 const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];
  return (
   <div className="list-group">
        <Link className="list-group-item">Tuiter</Link>
        <Link to="/tuiter/home" className={`list-group-item
                       ${active === 'home'?'active':''}`}>
          Home
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item
                       ${active === 'explore'?'active':''}`}>
          Explore
        </Link>
        <Link to="/" className={`list-group-item
                       ${active === 'notifications'?'active':''}`}>
          Labs
        </Link>
        <Link className={`list-group-item
                               ${active === 'messages'?'active':''}`}>
          Notifications
        </Link>
        <Link className={`list-group-item
                       ${active === 'messages'?'active':''}`}>
          Messages
        </Link>
        <Link className={`list-group-item
                       ${active === 'bookmarks'?'active':''}`}>
          Bookmarks
        </Link>
        <Link className={`list-group-item
                       ${active === 'lists'?'active':''}`}>
          Lists
        </Link>
        <Link to="/tuiter/profile" className={`list-group-item
                       ${active === 'profile'?'active':''}`}>
          Profile
        </Link>
        <Link className={`list-group-item
                       ${active === 'more'?'active':''}`}>
          More
        </Link>
      </div>
  );
};
export default NavigationSidebar;

