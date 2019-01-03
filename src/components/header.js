import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Styles from '../util/styles';
import User from './user';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.setUser = this.setUser.bind(this);
    }
    
    setUser({ name, avatar }) {
        this.props.onUser({ name, avatar });
    }
  
    render() {
      return (
        <View style={[Styles.container, {backgroundColor: '#FFF8DC'}]}>
            <Text style={Styles.title}>- header -</Text>
            <Image style={Styles.avatar} source={{uri: this.props.userAvatar}} />
            <Text style={Styles.user}>{this.props.userName}</Text>
            <User userName={this.setUser}/>
        </View>
      );
    }
}