import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class OneManga extends Component {
  state = {
    infos: [],
  };

  componentDidMount() {
    axios.get(`https://kitsu.io/api/edge/trending/manga`).then((response) => {
      this.setState({
        infos: response.data.data,
      });
    });
  }

  render() {
    const filteredInfos = this.state.infos.filter((info) => {
      if (this.props.match.params.id == info.id) {
        return true;
      } else {
        return false;
      }
    });
    return (
      <div>
        {filteredInfos.length !== 0 && (
          <div>
            <img
              src={filteredInfos[0].attributes.posterImage.small}
              alt={filteredInfos[0].attributes.canonicalTitle}
            />
            <h1>{filteredInfos[0].attributes.canonicalTitle}</h1>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(OneManga);
