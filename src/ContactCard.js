import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li>email: {this.props.email}</li>
        </ul>
      </div>
    );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ContactCard;