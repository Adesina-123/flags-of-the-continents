import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './App.css';

class App extends React.Component {
  state = {
    phone: '',
  };
  render() {
    return (
        <PhoneInput
          country={'ng'}
          value={this.state.phone}
          onChange={(phone) => this.setState({phone})}
        />
      
    );
  }
}

export default App;
