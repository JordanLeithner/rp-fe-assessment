import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/styles.css'



class WithReddit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: props.isChecked || false,
      };
      
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
      this.props.notifyChange(!this.state.isChecked);
      this.setState({ isChecked: !this.state.isChecked });
      }

    render () {
      return (
        <label className="switch">
          <input className="regularCheckbox" type="checkbox" value={this.state.isChecked} onChange={this.handleChange} checked = {this.state.isChecked} /> With Reddit
        </label>
      );
    }
  }
  
  ReactDOM.render(<WithReddit isChecked />, document.getElementById('root'));

export default WithReddit;