import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import ParentNews from "./components/ParentNews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
    state = {
        progress: 0,
        apiKey: process.env.REACT_APP_NEWS_API,
    };
    setProgress = (progress) => {
        this.setState({ progress: progress });
    };
    render() {
        return (
            <>
                <Router>
                    <NavBar />
                    <LoadingBar
                        color="#f11946"
                        progress={this.state.progress}
                    />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <ParentNews
                                    apiKey={this.state.apiKey}
                                    setProgress={this.setProgress}
                                    key="general"
                                    pageSize={9}
                                    country="in"
                                    category="general"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/business"
                            element={
                                <ParentNews
                                    apiKey={this.state.apiKey}
                                    setProgress={this.setProgress}
                                    key="business"
                                    pageSize={9}
                                    country="in"
                                    category="business"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/entertainment"
                            element={
                                <ParentNews
                                    apiKey={this.state.apiKey}
                                    setProgress={this.setProgress}
                                    key="entertainment"
                                    pageSize={9}
                                    country="in"
                                    category="entertainment"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/general"
                            element={
                                <ParentNews
                                    apiKey={this.state.apiKey}
                                    setProgress={this.setProgress}
                                    key="general"
                                    pageSize={9}
                                    country="in"
                                    category="general"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/health"
                            element={
                                <ParentNews
                                    apiKey={this.state.apiKey}
                                    setProgress={this.setProgress}
                                    key="health"
                                    pageSize={9}
                                    country="in"
                                    category="health"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/science"
                            element={
                                <ParentNews
                                    apiKey={this.state.apiKey}
                                    setProgress={this.setProgress}
                                    key="science"
                                    pageSize={9}
                                    country="in"
                                    category="science"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/sports"
                            element={
                                <ParentNews
                                    apiKey={this.state.apiKey}
                                    setProgress={this.setProgress}
                                    key="sports"
                                    pageSize={9}
                                    country="in"
                                    category="sports"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/technology"
                            element={
                                <ParentNews
                                    apiKey={this.state.apiKey}
                                    setProgress={this.setProgress}
                                    key="technology"
                                    pageSize={9}
                                    country="in"
                                    category="technology"
                                />
                            }
                        />
                    </Routes>
                </Router>
            </>
        );
    }
}
