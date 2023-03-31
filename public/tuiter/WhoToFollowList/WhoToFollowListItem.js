const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-xl-2 col-xxl-2 col-lg-3 pe-1">
                    <img class="rounded-circle img-fluid" src="${who.avatarIcon}" width="100%"/>
                </div>
                <div class="col-xl-7 col-xxl-7 col-lg-7 ps-1">
                    <div class="fw-bolder">${who.userName} <i class="fas fa-check-circle"></i></div>
                    <div>${who.handleName}</div>
                </div>
                <div class="col-xl-3 col-xxl-3 col-lg-2 ps-0">
                    <button class="btn btn-primary rounded-pill mt-2 float-end">Follow</button>
                </div>
            </div>
        </li>
    `)
}
export default WhoToFollowListItem;