import React, { Component } from "react";
import ChildNews from "./ChildNews";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class ParentNews extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 10,
        category: "general",
    };
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };
    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            // loading: false,
        };
        document.title = `${this.capitalize(this.props.category)} - News`;
    }
    async update() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        this.props.setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(70);

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            // loading: false,
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.update();
    }
    // nextClickHandler = () => {
    //     this.setState({
    //         page: this.state.page + 1,
    //     });
    //     this.update();
    // };
    // prevClickHandler = () => {
    //     this.setState({
    //         page: this.state.page - 1,
    //     });
    //     this.update();
    // };

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1,
        });
        const url = `https://newsapi.org/v2/top-headlines?country=${
            this.props.country
        }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
            this.state.page + 1
        }&pageSize=${this.props.pageSize}`;
        // console.log(this.state.page + 1);
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            // loading: false,
        });
    };

    render() {
        return (
            <>
                <h1 className="text-center my-2">
                    Top {this.capitalize(this.props.category)} Headlines
                </h1>
                {/* {this.state.loading && <Spinner />} */}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={
                        this.state.articles.length !== this.state.totalResults
                    }
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles
                                .filter((element) => {
                                    return (
                                        element.urlToImage !== null &&
                                        element.title !== null &&
                                        element.description !== null
                                    );
                                })
                                .map((element, index) => {
                                    return (
                                        <div
                                            className="col-md-4 my-3"
                                            key={index}
                                        >
                                            <ChildNews
                                                title={element.title.slice(
                                                    0,
                                                    60
                                                )}
                                                description={element.description.slice(
                                                    0,
                                                    240
                                                )}
                                                imgUrl={element?.urlToImage}
                                                newsUrl={element.url}
                                                author={element.author}
                                                date={element.publishedAt}
                                                source={element.source.name}
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between my-4">
                    <button
                        className="btn btn-dark"
                        onClick={this.prevClickHandler}
                        disabled={this.state.page <= 1}
                    >
                        &larr; Previous
                    </button>
                    <button
                        className="btn btn-dark"
                        onClick={this.nextClickHandler}
                        disabled={
                            this.state.page + 1 >
                            Math.ceil(
                                this.state.totalResults / this.props.pageSize
                            )
                        }
                    >
                        Next &rarr;
                    </button>
                </div> */}
            </>
        );
    }
}

export default ParentNews;
