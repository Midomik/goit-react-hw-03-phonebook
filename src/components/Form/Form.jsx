import { Component } from 'react';
import css from './Form.module.css';

export class Form extends Component {
  state = { name: '', number: '' };

  hendlerSubmit = e => {
    e.preventDefault();
    this.props.addToContact({
      name: this.state.name,
      number: this.state.number,
    });
    console.log(this.state);
    e.currentTarget.elements.name.value = '';
    e.currentTarget.elements.number.value = '';
    // this.reset(); doesn't work 🤷‍♂️
  };

  ////////////////////////////////////////////////
  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  ////////////////////////////////////////////////
  reset = () => {
    this.setState({ number: '', name: '' });
  };
  ////////////////////////////////////////////////

  render() {
    return (
      <form onSubmit={this.hendlerSubmit} className={css.form}>
        <label>
          <h2 className={css.title_name}>Name</h2>
          <input
            onChange={this.handleChangeInput}
            className={css.name_input}
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          <h2 className={css.title_number}>Number</h2>
          <input
            onChange={this.handleChangeInput}
            className={css.name_input}
            type="tel"
            name="number"
            required
          />
        </label>
        <button className={css.sub_btn} type="submit">
          Add to contact
        </button>
      </form>
    );
  }
}
