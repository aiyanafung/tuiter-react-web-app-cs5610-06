const NavigationSidebar = () => {
    return(`
         <div class="list-group">
            <a href="/" class="list-group-item list-group-item-action">
                <i class="fab fa-twitter"></i></a>
            <a href="../HomeScreen/index.html" id="lihome" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
                <i class="fas fa-home mt-1"></i>
                <span class="d-none d-xl-block ms-1">Home</span></a>
            <a href="../explore/index.html" id="liexplore" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
                <i class="fas fa-hashtag mt-1"></i>
                <span class="d-none d-xl-block ms-1">Explore</span></a>
            <a href="/" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
                <i class="fas fa-bell mt-1"></i>
                <span class="d-none d-xl-block ms-1">Notifications</span></a>
            <a href="#" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
                <i class="fas fa-envelope mt-1"></i>
                <span class="d-none d-xl-block ms-1">Messages</span></a>
            <a href="../bookmarks.html" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
                <i class="fas fa-bookmark mt-1"></i>
                <span class="d-none d-xl-block ms-1">Bookmarks</span></a>
            <a href="/" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
                <i class="fas fa-list mt-1"></i>
                <span class="d-none d-xl-block ms-1">Lists</span></a>
            <a href="../profile.html" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
                <i class="fas fa-user mt-1"></i>
                <span class="d-none d-xl-block ms-1">Profile</span></a>
            <a href="/" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
                <i class="fas fa-ellipsis-h mt-1"></i>
                <span class="d-none d-xl-block ms-1">More</span></a>
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
               class="btn btn-primary btn-block rounded-pill">
               Tweet</a>
        </div>
    `);
}


$('#nav-sidebar').append(NavigationSidebar);
export default NavigationSidebar;