import React, { useEffect, useState } from "react";
import ChildNews from "./ChildNews";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const ParentNews = (props) => {
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const update = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        props.setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(70);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);
    };
    useEffect(() => {
        update();
    });

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${
            props.country
        }&category=${props.category}&apiKey=${props.apiKey}&page=${
            page + 1
        }&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    return (
        <>
            <h1 className="text-center my-4">
                Top {capitalize(props.category)} Headlines
            </h1>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles
                            .filter((element) => {
                                return (
                                    element.urlToImage !== null &&
                                    element.title !== null &&
                                    element.description !== null
                                );
                            })
                            .map((element, index) => {
                                return (
                                    <div className="col-md-4 my-3" key={index}>
                                        <ChildNews
                                            title={element.title.slice(0, 60)}
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
        </>
    );
};

export default ParentNews;

ParentNews.defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
};
ParentNews.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};
