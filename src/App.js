
import React, {Component} from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

export default class App extends Component {
  constructor(props) {
      super(props);
      StatusBar.setHidden(true);

      this.state = { 
        userName: 'Anderson Costa',
        userAvatar: 'https://avatars0.githubusercontent.com/u/25548201'
      }

      this.setUse = this.setUse.bind(this);
  }

  setUse({ name, avatar }) {
    this.setState({ userName: name });
    this.setState({ userAvatar: avatar });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header userName={this.state.userName} userAvatar={this.state.userAvatar} onUser={this.setUse}  />
        <Body userName={this.state.userName} userAvatar={this.state.userAvatar} onUser={this.setUse} />
        <Footer userName={this.state.userName} userAvatar={this.state.userAvatar} onUser={this.setUse} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
