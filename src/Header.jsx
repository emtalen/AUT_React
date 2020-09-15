import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

class NavHeader extends Component {
  state = {
    activeItem: "",
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Segment inverted>
        <Menu data-cy="header" inverted secondary>
          <Menu.Header as="h1">Employee List</Menu.Header>
          <Menu.Menu position="right">
            <Menu.Item
              name="contact"
              active={activeItem === "contact"}
              onClick={this.handleItemClick}
            >
              Contact us
            </Menu.Item>
            <Menu.Item
              name="about"
              active={activeItem === "about"}
              onClick={this.handleItemClick}
            >
              About us
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

export default NavHeader;
