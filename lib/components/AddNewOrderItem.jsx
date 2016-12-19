import React from 'react';

export default class AddNewOrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(e) {
    this.props.handleClick();
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          Item Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input className="item__create-submit" type="submit" value="Create Item" onSubmit={this.handleSubmit} />
      </form>
    );
  }
}