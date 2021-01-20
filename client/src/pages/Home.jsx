import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Modal from "./Modal";
import { withRouter } from "react-router-dom";

class Home extends Component {
  state = {
    infos: [],
    showModal: false,
    dataModal: {
      info: "",
    },
  };
  getModal = (info) => {
    this.setState({ showModal: true, dataModal: info });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  // handleSearch = (value) => {
  //   this.setState({
  //     infos: value,
  //   });
  // };

  componentDidMount() {
    axios.get(`https://kitsu.io/api/edge/trending/manga`).then((response) => {
      this.setState({
        infos: response.data.data,
      });
    });
  }

  render() {
    console.log(this.state.infos);
    return (
      <div>
        <h1 className="title">Manga Time</h1>

        {this.state.infos.map((info) => {
          return (
            <div key={info.id} className="small">
              <img
                className="home-image"
                src={info.attributes.posterImage.tiny}
                alt={info.attributes.canonicalTitle}
              />
              <p>Rank: {info.attributes.popularityRank}</p>
              <p>Rating: {info.attributes.averageRating}</p>

              <h3 onClick={() => this.getModal(info)}>
                {info.attributes.canonicalTitle}
              </h3>
            </div>
          );
        })}
        <Modal
          show={this.state.showModal}
          onHide={this.hideModal}
          info={this.state.dataModal.info}
        />
      </div>
    );
  }
}

export default Home;

{
  /* <Link
                to={{
                  pathname: `/details/${info.id}`,
                }}
              > */
}
