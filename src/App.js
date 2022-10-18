import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ParentNews from "./components/ParentNews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
    const [progress, setProgress] = useState(0);

    const apiKey = process.env.REACT_APP_NEWS_API;

    return (
        <>
            <Router>
                <NavBar />
                <LoadingBar color="#f11946" progress={progress} />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <ParentNews
                                apiKey={apiKey}
                                setProgress={setProgress}
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
                                apiKey={apiKey}
                                setProgress={setProgress}
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
                                apiKey={apiKey}
                                setProgress={setProgress}
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
                                apiKey={apiKey}
                                setProgress={setProgress}
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
                                apiKey={apiKey}
                                setProgress={setProgress}
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
                                apiKey={apiKey}
                                setProgress={setProgress}
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
                                apiKey={apiKey}
                                setProgress={setProgress}
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
                                apiKey={apiKey}
                                setProgress={setProgress}
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
};

export default App;
