import React from 'react';  //react in lowercase is name of library
import ReactDOM from 'react-dom';
import '../../scss/styles.css'


class LandSuccess extends React.Component {

  constructor(props) { //checkbox code
    super(props);
    this.state = {
      isChecked: props.isChecked || false
    };
    
    this.handleChange = this.handleChange.bind(this);
    console.log('land success ctor', {props, state: this.state});

  }

  handleChange() {
    this.props.notifyChange(!this.state.isChecked);
    this.setState({ isChecked: !this.state.isChecked });
  }

  render () {
    return (
      <label className="switch">
        <input className="regularCheckbox" type="checkbox" value={this.state.isChecked} onChange={this.handleChange} checked = {this.state.isChecked} /> Land Success
      </label>
    );
  }
}

  ReactDOM.render(<LandSuccess isChecked />, document.getElementById('root'));

export default LandSuccess;