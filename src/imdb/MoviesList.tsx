import React, { Component } from "react";

import * as imdb from "imdb-api";
type MyProps = {};

type MyState = {
  movie: imdb.Movie | undefined;
  error: string;
};

class MoviesList extends Component<MyProps, MyState> {
  state: MyState = { movie: undefined, error: "" };

  async componentDidMount() {
    try {
      const results = await imdb.get(
        { name: "Toxic Avenger" },
        { apiKey: "d7047f13-9701-41b6-80e4-3e0fa56d6a05", baseURL: "http://localhost:3000" }
      );
      this.setState({ movie: results, error: "" });
    } catch (e) {
      this.setState({ movie: undefined, error: e.message });
    }
  }

  render() {
    return (
      <div className="top">
        <h1>Movie</h1>
        <div className="content">{this.state.movie?.title}</div>
        <div className="error">{this.state.error}</div>
      </div>
    );
  }
}

export default MoviesList;
