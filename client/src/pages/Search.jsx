import React, { Component } from "react";
import "../styles/search.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import axios from "axios";

class Search extends Component {
  state = {
    value: "",
    results: [],
  };

  // getInfo = () => {
  //   axios
  //     .get(`https://api.jikan.moe/v3/search/manga?q=${this.state.query}`)
  //     .then((response) => {
  //       this.setState({
  //         results: response.data,
  //       });
  //     });
  // };

  // handleInputChange = () => {
  //   this.setState({ query: this.search.value }, () => {
  //     if (this.state.query && this.state.query.length > 1) {
  //       if (this.state.query.length % 2 === 0) {
  //         this.getInfo();
  //       }
  //     } else if (!this.state.query) {
  //       console.log(this.state.query);
  //     }
  //   });
  // };

  // render() {
  //   return (
  //     <form>
  //       <input
  //         placeholder="Search for..."
  //         ref={input => this.search = input}
  //         onChange={this.handleInputChange}
  //       />
  //       <p>{this.state.query}</p>
  //     </form>
  //   )
  // }

  handleSubmit = (event) => {
    console.log(event.target.value);
    axios
      .get(`https://api.jikan.moe/v3/search/manga?q=${event.target.value}`)
      .then((response) => {
        this.props.results = response.data;
        console.log(this.props.results);
        console.log(response.data);
      });
  };

  render() {
    return (
      <section>
        <header className="header-search">
          <h3>Search the mangas you need</h3>
          <div className="wrap">
            <form className="search">
              <input
                type="search"
                className="searchTerm"
                name="search"
                onSubmit={this.handleSubmit}
                placeholder="Search ..."
              />
              <button type="submit" className="searchButton">
                <SearchRoundedIcon />
              </button>
            </form>
          </div>
        </header>
      </section>
    );
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   axios
  //     .get(`https://api.jikan.moe/v3/search/manga`, {
  //       params: { q: { searchValue } },
  //     })
  //     .then((response) => {
  //       this.setState({
  //         searchResult: response.data,
  //       });
  //     });
  // };

  //
}

export default Search;
