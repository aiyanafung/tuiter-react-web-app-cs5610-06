const PostSummaryItem = (post) => {
    return (`
         <li class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <div class="text-secondary">${post.topic}</div>
                    <div class="fw-bolder">${post.userName} <i class="fas fa-check-circle"></i>
                        <span class="fw-normal text-secondary">- ${post.time}</span>
                    </div>
                    <div class="fw-bolder">${post.title}</div>
                     <div class="text-secondary">${jQuery.isEmptyObject(post.tweets)? "" : post.tweets}</div>
                </div>
                <div class="col-2">
                    <img class="float-end img-fluid mb-2" src=${post.image}/>
                </div>
            </div>
        </li>
    `)
}
export default PostSummaryItem;