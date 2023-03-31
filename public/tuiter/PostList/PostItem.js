const PostItem = (homepost) => {
    return (`
        <li class="list-group-item bg-black border-secondary">
            <div class="row">
                <div class="col-2 pe-0">
                    <img class="rounded-circle" src=${homepost.avartar} width="100%"/>
                </div>
                <div class="col-10">
                    <div class="d-flex justify-content-between">
                        <div class="fw-bolder">${homepost.userName} <i class="fas fa-check-circle"></i><span class="fw-normal text-secondary">${homepost.handleName} • ${homepost.time}</span></div>
                        <i class="fas fa-ellipsis-h text-secondary wd-flex-noWrap"></i>
                    </div>
                    <div>${homepost.tuit}</div>
                    <div class="card border-secondary mt-2 bg-black">
                        <img src=${homepost.image} class="card-img-top border-bottom border-secondary" alt="...">
                        ${homepost.cardTitle != '' ? `
                        <div class="card-body">
                            <div class="card-title ms-2">${homepost.cardTitle}</div>
                            <p class="card-text ms-2 text-secondary">${homepost.cardText}</p>
                            <div class="ms-2"><i class="fas fa-link text-secondary"></i></div>
                        </div>
                        `
                        : ''}
                    </div>
                    <div class="row text-secondary mt-2">
                        <div class="col"><i class="far fa-comment"></i>    ${homepost.comment}</div>
                        <div class="col"><i class="fas fa-retweet"></i>    ${homepost.retuit}</div>
                        <div class="col"><i class="far fa-heart"></i>    ${homepost.like}</div>
                        <div class="col"><i class="far fa-share-square"></i></div>
                    </div>
                </div>
            </div>
        </li>
    `);
}
export default PostItem;