import React, { Component } from 'react';

class Toolbar extends Component {
    render() {
        return (
            <div className="main-containter">
                <div className="tool-bar">
                    <div className="filter">
                        <select className="custom-select">
                            <option selected>Khu vực</option>
                            <option value="1">Hà Nội</option>
                            <option value="2">Hải Phòng</option>
                            <option value="3">Hồ Chí Minh</option>
                        </select>
                    </div>
                    <div className="input-group search-input">
                        <input type="text" className="form-control" placeholder="Tìm kiếm..." aria-label="" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-base" type="button" id="button-addon2">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <button type="button" className="btn btn-dark" data-toggle="tooltip" data-placement="right" data-toggle="modal" data-target="#addModal" title="Tooltip on right">
                        <i className="fas fa-plus" />
                    </button>
                </div>
            </div>
        );
    }
}

export default Toolbar;