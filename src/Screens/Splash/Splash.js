import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class Splash extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate("Main Tab"), 2000);
  }
  render() {
    return (
      <View style={styles._splash}>
        <Image
          style={styles._splash_logo}
          source={require('./../../Assets/covidlogo.png')}
        />
        <Text style={styles._salogan}> Track Covid Data Here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  _splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _splash_logo: {
    width: 300,
    height: 300,
    opacity: 0.5
  },
  _salogan: {
    fontWeight: 'bold',
    color: '#8a0404',
  },
});

export default Splash;
