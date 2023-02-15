import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

function exploreComponent() {
   $('#wd-explore').append(`
       <h2>Explore</h2>
     <div class="row mt-2">
       <div class="col-2 col-md-2 col-lg-1 col-xl-2">
           ${NavigationSidebar()}
       </div>
       <div class="col-10 col-lg-7 col-xl-6">
            <div class="row">
               <div class="col-11">
                   <span class="position-absolute ms-3 mt-2"><i class="fas fa-search"></i></span>
                   <input type="search" class="ps-5 form-control rounded-pill mb-2" placeholder="Search Twitter" id="search"/>
               </div>
               <div class="col-1 mt-1 float-end">
                   <i class="fas fa-cog fa-2x" style="color:#0c63e4"></i>
               </div>
           </div>
           <ul class="nav nav-tabs mb-2">
               <li class="nav-item">
                   <a class="nav-link active" href="for-you.html">For you</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="trending.html">Trending</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="news.html">News</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="sports.html">Sports</a>
               </li>
               <li class="nav-item">
                   <span class="d-none d-sm-none d-md-block">
                       <a class="nav-link" href="entertainment.html" tabindex="-1">Entertainment</a>
                   </span>
               </li>
           </ul>

           <div class="position-relative">
               <img src="../image/SpaceX.jpg" class="card-img-bottom" width="100%"/>
               <h3 class="position-absolute bottom-0 ms-1 text-white">SpaceX's Starship</h3>
           </div>
           ${PostSummaryList()}
       </div>
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
           ${WhoToFollowList()}
       </div>
      </div>
   `)
}
$(exploreComponent);