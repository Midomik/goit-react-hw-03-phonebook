import { Component } from 'react';
import css from './SearchContact.module.css';
export class SearchContact extends Component {
  findContatct = e => {
    this.props.filterContact(e.target.value);
  };
  render() {
    return (
      <div className={css.search_container}>
        <h2 className={css.search_title}>Find contacts by name</h2>
        <input
          className={css.search_input}
          onChange={this.findContatct}
          type="text"
          name="search"
          value={this.props.value}
        />
      </div>
    );
  }
}
