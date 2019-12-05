import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

export default class Triangle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.advance
  }
  
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.paragraph}>
      //     Local files and assets can be imported by dragging and dropping them into the editor
      //   </Text>
      //   <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
      // </View>
      <Svg
        width="100%"
        height="100%"
        fill="white"
        stroke="red"
        viewBox="0 0 100 100"
      >
        <Polygon
          points="10,0 30,0 20, 20"
          strokeWidth="2"
        />
      </Svg>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: 24,
  // },
  // paragraph: {
  //   margin: 24,
  //   marginTop: 0,
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  // logo: {
  //   height: 128,
  //   width: 128,
  // }
});