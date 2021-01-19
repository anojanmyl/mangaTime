import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "../styles/home.css";
class Home extends Component {
  state = {
    infos: [],
    // searchInfo: "",
  };

  // handleClick(event) {
  //   console.log("My info", event);
  // }

  // // handleChange(event) {
  // //   console.log("calling", event.target);
  // //   this.setState({ searchInfo: event.target.value });
  // // }

  // handleSearch = (searchValue) => {
  //   let searchKey = searchValue;
  //   axios
  //     .get(`https://api.jikan.moe/v3/search/manga?q=${searchKey}`)
  //     .then((responseFromApi) => {
  //       console.log("response from api ->", responseFromApi);
  //       this.setState({
  //         infos: responseFromApi.data,
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // };

  // componentDidMount() {
  //   axios
  //     .get("https://api.jikan.moe/v3/top/manga/1/bypopularity")
  //     .then((responseFromApi) => {
  //       // console.log("response from api ->", responseFromApi);
  //       this.setState({
  //         infos: responseFromApi.data.news,
  //       });
  //     });
  // }

  handleSearch = (value) => {
    this.setState({
      infos: value,
    });
  };

  componentDidMount() {
    axios
      .get(`https://api.jikan.moe/v3/top/manga/1/bypopularity`)
      .then((response) => {
        this.setState({
          infos: response.data,
        });
        console.log(response.data);
      });
  }

  render() {
    return (
      <div className="home">
        <h1 className="title">Manga Time</h1>
        {/* <Search className="searchbar" searchResult={this.handleSearch} /> */}

        {/* {this.state.infos.map((info) => {
          return (
            <div key={info.id}>
              <img src={info.image} alt={info.name} />
              <Link
                to={{
                  pathname: `/article/${info.id}`,
                  info,
                }}
              >
                <h3 onClick={() => this.handleClick(info)}> {info.title}</h3>
              </Link>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default Home;
