import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

export default class PlayerSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      move: 0
    };
    this.moveRight = this.moveRight.bind(this)
    this.moveLeft = this.moveLeft.bind(this)
  }

   moveRight = () => {
    if(this.state.move >= 40){
      this.setState({
        move: this.state.move
      });
    }
    else {
      this.setState({
        move: this.state.move + 20
      });
    }
  };

  moveLeft = () => {
    if(this.state.move <= 20){
      this.setState({
        move: this.state.move
      });
    }
    else {
      this.setState({
        move: this.state.move - 20
      });
    }
  };
  
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
        stroke="white"
        strokeWidth ="0"
        viewBox="0 0 100 100"
      >
        <Rect
          x={30 + this.state.move}
          y="40"
          width="20"
          height="20"
          strokeWidth="2"
        />
        <Rect
          x="50"
          y="80"
          width="50"
          height="20"
          fill = "blue"
          onPress = { this.moveRight }
        />
        <Rect
          x= "0"
          y="80"
          width="50"
          height="20"
          fill = "red"
          onPress = { this.moveLeft }
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