import React, { Component } from 'react';
import '../assets/css/storedetail.css';

class StoreInfo extends Component {
    render() {
        return (
            <div className="col-sm-12 col-md-12 col-lg-12">
                {/* product */}
                <div className="product-content product-wrap clearfix product-detail">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <div className="product-image">
                                <div id="myCarousel-2" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#myCarousel-2" data-slide-to={0} className />
                                        <li data-target="#myCarousel-2" data-slide-to={1} className="active" />
                                        <li data-target="#myCarousel-2" data-slide-to={2} className />
                                    </ol>
                                    <div className="carousel-inner">
                                        {/* Slide 1 */}
                                        <div className="carousel-item active">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Circle_K%2C_1255_Academy_Park_Lp%2C_Colorado_Springs%2C_CO.jpg" className="img-responsive" alt="" />
                                        </div>
                                        {/* Slide 2 */}
                                        <div className="carousel-item">
                                            <img src="https://cdn-www.vinid.net/2020/08/b92ce929-c%E1%BB%ADa-h%C3%A0ng-ti%E1%BB%87n-l%E1%BB%A3i-circle-k.jpg" className="img-responsive" alt="" />
                                        </div>
                                        {/* Slide 3 */}
                                        <div className="carousel-item">
                                            <img src="https://www.circlek.com.vn/wp-content/uploads/2020/02/a9322ffbf5bd0ee357ac-2.jpg" className="img-responsive" alt="" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#myCarousel-2" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#myCarousel-2" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                            <h2 className="name">
                                Circle K
                <small>6 Ngõ 71 Láng Hạ, Đống Đa</small>
                                <i className="fa fa-star fa-2x text-primary" />
                                <i className="fa fa-star fa-2x text-primary" />
                                <i className="fa fa-star fa-2x text-primary" />
                                <i className="fa fa-star fa-2x text-primary" />
                                <i className="fa fa-star fa-2x text-muted" />
                                <span className="fa fa-2x"><h5>(109) Votes</h5></span>
                                <a href="javascript:void(0);">109 customer reviews</a>
                            </h2>
                            <hr />
                            <button type="button" class="btn btn-dark"><span><i className="fas fa-phone-alt" /></span>Gọi để đặt bàn<span className="text-bold font18 pl-2">0981524316</span></button>
                            <div><span><i className="far fa-clock" /></span>: 8h30 - 12h</div>
                            <div><span><i className="fas fa-dollar-sign" /></span>: Giá trung bình: 100,000 - 200,000 đ</div>
                            <hr />
                            <div className="description description-tabs">
                                <ul id="myTab" className="nav nav-pills">
                                    <li className="nav-item"><a href="#more-information" data-toggle="tab" className="no-margin">Product Description </a></li>
                                    <li className="nav-item"><a href="#specifications" data-toggle="tab">Specifications</a></li>
                                    <li className="nav-item"><a href="#reviews" data-toggle="tab">Reviews</a></li>
                                </ul>
                                <div id="myTabContent" className="tab-content">
                                    <div className="tab-pane fade active in" id="more-information">
                                        <br />
                                        <strong>Description Title</strong>
                                        <p>
                                            Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue
                                            sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec.
                    </p>
                                    </div>
                                    <div className="tab-pane fade" id="specifications">
                                        <br />
                                        <dl className>
                                            <dt>Gravina</dt>
                                            <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                                            <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                            <dd>Eget lacinia odio sem nec elit.</dd>
                                            <br />
                                            <dt>Test lists</dt>
                                            <dd>A description list is perfect for defining terms.</dd>
                                            <br />
                                            <dt>Altra porta</dt>
                                            <dd>Vestibulum id ligula porta felis euismod semper</dd>
                                        </dl>
                                    </div>
                                    <div className="tab-pane fade" id="reviews">
                                        <br />
                                        <form method="post" className="well padding-bottom-10" onsubmit="return false;">
                                            <textarea rows={2} className="form-control" placeholder="Write a review" defaultValue={""} />
                                            <div className="margin-top-10">
                                                <button type="submit" className="btn btn-sm btn-primary pull-right">
                                                    Submit Review
                        </button>
                                                <a href="javascript:void(0);" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title data-original-title="Add Location"><i className="fa fa-location-arrow" /></a>
                                                <a href="javascript:void(0);" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title data-original-title="Add Voice"><i className="fa fa-microphone" /></a>
                                                <a href="javascript:void(0);" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title data-original-title="Add Photo"><i className="fa fa-camera" /></a>
                                                <a href="javascript:void(0);" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title data-original-title="Add File"><i className="fa fa-file" /></a>
                                            </div>
                                        </form>
                                        <div className="chat-body no-padding profile-message">
                                            <ul>
                                                <li className="message">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="online" />
                                                    <span className="message-text">
                                                        <a href="javascript:void(0);" className="username">
                                                            Alisha Molly
                              <span className="badge">Purchase Verified</span>
                                                            <span className="pull-right">
                                                                <i className="fa fa-star fa-2x text-primary" />
                                                                <i className="fa fa-star fa-2x text-primary" />
                                                                <i className="fa fa-star fa-2x text-primary" />
                                                                <i className="fa fa-star fa-2x text-primary" />
                                                                <i className="fa fa-star fa-2x text-muted" />
                                                            </span>
                                                        </a>
                            Can't divide were divide fish forth fish to. Was can't form the, living life grass darkness very image let unto fowl isn't in blessed fill life yielding above all moved
                          </span>
                                                    <ul className="list-inline font-xs">
                                                        <li>
                                                            <a href="javascript:void(0);" className="text-info"><i className="fa fa-thumbs-up" /> This was helpful (22)</a>
                                                        </li>
                                                        <li className="pull-right">
                                                            <small className="text-muted pull-right ultra-light"> Posted 1 year ago </small>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="message">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="online" />
                                                    <span className="message-text">
                                                        <a href="javascript:void(0);" className="username">
                                                            Aragon Zarko
                              <span className="badge">Purchase Verified</span>
                                                            <span className="pull-right">
                                                                <i className="fa fa-star fa-2x text-primary" />
                                                                <i className="fa fa-star fa-2x text-primary" />
                                                                <i className="fa fa-star fa-2x text-primary" />
                                                                <i className="fa fa-star fa-2x text-primary" />
                                                                <i className="fa fa-star fa-2x text-primary" />
                                                            </span>
                                                        </a>
                            Excellent product, love it!
                          </span>
                                                    <ul className="list-inline font-xs">
                                                        <li>
                                                            <a href="javascript:void(0);" className="text-info"><i className="fa fa-thumbs-up" /> This was helpful (22)</a>
                                                        </li>
                                                        <li className="pull-right">
                                                            <small className="text-muted pull-right ultra-light"> Posted 1 year ago </small>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <a href="javascript:void(0);" className="btn btn-success btn-lg"><span><i class="far fa-thumbs-up"></i></span>Like</a>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="btn-group pull-right">
                                        <button className="btn btn-white btn-default"><i className="fa fa-star" /> Add to wishlist</button>
                                        <button className="btn btn-white btn-default"><i className="fa fa-envelope" /> Contact Seller</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StoreInfo;