import React, { Component } from "react";

export class ChildNews extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } =
            this.props;
        return (
            <div>
                <div className="card">
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}{" "}
                            <span className="badge text-bg-info my-1">
                                {source}
                            </span>
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">
                            <small className="text-danger">
                                By {author ? author : "Unknown"} On{" "}
                                {new Date(date).toGMTString()}
                            </small>
                        </p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChildNews;
