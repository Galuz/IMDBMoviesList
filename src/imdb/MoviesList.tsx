import React, { Component } from "react";

import * as imdb from "imdb-api";
type MyProps = {};

type MyState = {
  movie: imdb.Movie | undefined,
  error: string,
};

class MoviesList extends Component<MyProps, MyState> {
  state: MyState = { movie: undefined, error: "" };

  async componentDidMount() {
    try {
      const results = await imdb.get(
        { name: "Toxic Avenger" },
        { apiKey: "use your api key here", baseURL: "http://localhost:3000" }
      );
      this.setState({ movie: results, error: "" });
    } catch (e) {
      this.setState({ movie: undefined, error: e.message });
    }
  }

  render() {
    return (
      
    );
  }
}

export default MoviesList;
