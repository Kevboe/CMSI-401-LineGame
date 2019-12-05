import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Svg, { Circle, Rect, Line, Polygon, Text} from 'react-native-svg';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';

// You can import from local files
import PlayerSquare from './components/PlayerSquare';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor: 'black'}}>
        <Svg
         width="100%"
          height="100%"
          fill="black"
          stroke="white"
          viewBox="0 0 100 100">
        <Text
            x="50"
            fill="none"
            stroke="white"
            fontSize="18"
            fontWeight="bold"
            textAnchor="middle">
            LineGame
          </Text>
        </Svg>
        <Button
          title = "Play Game"
          color = 'white'
          onPress={() => this.props.navigation.navigate('Game')}
          />
          <Text style={{color: 'black', fontSize: 30, }}>
          invisible text
          </Text>
        <Button
          onPress={() => {
            alert("Leaderboard goes here");
          }}
          title = "Leaderboard"
          color = 'white'
        />
        <Button
          onPress={() => {
            alert("Settings here");
          }}
          title = "Settings"
          color = 'white'
        />
      </View>
    );
  }
}

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      move: 0,
      score: 0,
      scoreColor: "blue",
      restart: false,
      animRunning: false,
      obstacleX1: 0,
      obstacleY1: -230,
      obstacleX2: 0,
      obstacleY2: -180,
      obstacleX3: 0,
      obstacleY3: -80,
      obstacleX4: 0,
      obstacleY4: -130
    };
    let reqID
  }

  moveRight = () => {
    if (this.state.move >= 60) {
      this.setState({
        move: this.state.move,
      });
    } else {
      this.setState({
        move: this.state.move + 20,
      });
    }
    if (!this.state.animRunning){
      this.toggleAnimation()
    }
    if(this.state.restart){
      this.reset()
    }
  };

  moveLeft = () => {
    if (this.state.move <= 0) {
      this.setState({
        move: this.state.move,
      });
    } else {
      this.setState({
        move: this.state.move - 20,
      });
    }
    if (!this.state.animRunning){
      this.toggleAnimation()
    }
    if(this.state.restart){
      this.reset()
    }
  };

    toggleAnimation = () => {
    if(!this.state.animRunning){
    this.reqID = requestAnimationFrame(() => {
      this.updateX1()
      this.updateX2()
      this.updateX3()
      this.updateX4()
      this.animate()
    })
    }
    else{
      cancelAnimationFrame(this.reqID)
    }
    this.setState({
      animRunning: !this.state.animRunning
    });
  };

  animate = () => {
    this.reqID = requestAnimationFrame(() => {
      this.animate()
      this.updateY()
      this.updateY2()
      this.updateY3()
      this.updateY4()
      this.setScoreColor()
      this.collision()
    });
  }

  stopAnim = () => {
    // lets the game continue, no good way to refresh the game
    this.setState({
      restart: true
    })
    cancelAnimationFrame(this.reqID)
  }

  collision = () => {
    if(this.state.obstacleX1 <= this.state.move+18 && this.state.obstacleX1+18 >= this.state.move && this.state.obstacleY1 <= 122 && this.state.obstacleY1+18 >= 105){
      this.stopAnim()
    }
    if(this.state.obstacleX2 <= this.state.move+18 && this.state.obstacleX2+18 >= this.state.move && this.state.obstacleY2 <= 122 && this.state.obstacleY2+18 >= 105){
      this.stopAnim()
    }
    if(this.state.obstacleX3 <= this.state.move+18 && this.state.obstacleX3+18 >= this.state.move && this.state.obstacleY3 <= 122 && this.state.obstacleY3+18 >= 105){
      this.stopAnim()
    }
    if(this.state.obstacleX4 <= this.state.move+18 && this.state.obstacleX4+18 >= this.state.move && this.state.obstacleY4 <= 122 && this.state.obstacleY4+18 >= 105){
      this.stopAnim()
    }
  }

  setScoreColor = () => {
    if(this.state.score === 25){      
      this.setState({
        scoreColor: "purple"
      })
    }
    if(this.state.score === 50){      
      this.setState({
        scoreColor: "red"
      })
    }
    if(this.state.score === 75){      
      this.setState({
        scoreColor: "pink"
      })
    }
  }

  updateX1 = () => {
    this.setState({
        obstacleX1: Math.floor(Math.random()*4)*20
    })
  }

  updateY = () => {
    if(this.state.obstacleY1 >= 140){
      this.setState({
        obstacleY1: -60,
        score: this.state.score + 1 //could add a color at certain score points
      })
      this.updateX1()
    }
    else {
    this.setState({
      obstacleY1: this.state.obstacleY1 + 1
    })
    }
  };

  updateX2 = () => {
    this.setState({
        obstacleX2: Math.floor(Math.random()*4)*20
    })
  }

  updateY2 = () => {
    if(this.state.obstacleY2 >= 140){
      this.setState({
        obstacleY2: -60,
        score: this.state.score + 1
      })
      this.updateX2()
    }
    else {
    this.setState({
      obstacleY2: this.state.obstacleY2 + 1
    })
    }
  }

  updateX3 = () => {
    this.setState({
        obstacleX3: Math.floor(Math.random()*4)*20
    })
  }

  updateY3 = () => {
    if(this.state.obstacleY3 >= 140){
      this.setState({
        obstacleY3: -60,
        score: this.state.score + 1
      })
      this.updateX3()
    }
    else {
    this.setState({
      obstacleY3: this.state.obstacleY3 + 1
    })
    }
  }

  updateX4 = () => {
    this.setState({
        obstacleX4: Math.floor(Math.random()*4)*20
    })
  }

  updateY4 = () => {
    if(this.state.obstacleY4 >= 140){
      this.setState({
        obstacleY4: -60,
        score: this.state.score + 1
      })
      this.updateX4()
    }
    else {
    this.setState({
      obstacleY4: this.state.obstacleY4 + 1
    })
    }
  }

  reset = () => {
    this.setState({
      move: 0,
      score: 0,
      restart: false,
      animRunning: false,
      obstacleX1: 0,
      obstacleY1: -230,
      obstacleX2: 0,
      obstacleY2: -180,
      obstacleX3: 0,
      obstacleY3: -80,
      obstacleX4: 0,
      obstacleY4: -130
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Svg
          width="100%"
          height="100%"
          fill="black"
          stroke="white"
          viewBox="0 0 100 100">
          <Rect //black background
            x="-10"
            y="-20"
            width="120%"
            height="100%"
          />

          <Line x1="40%" y1="-50%" x2="40%" y2="100%" strokeWidth="2" />
          <Line x1="20%" y1="-50%" x2="20%" y2="100%" strokeWidth="2" />
          <Line x1="60%" y1="-50%" x2="60%" y2="100%" strokeWidth="2" />
          <Line x1="80%" y1="-50%" x2="80%" y2="100%" strokeWidth="2" />

          <Rect //one obstacle
            x= {11+ this.state.obstacleX1}
            y= {0+ this.state.obstacleY1}
            width="18"
            height="18"
            stroke= "none"
            fill= "red"
          />
          <Rect //two obstacle
            x= {11+ this.state.obstacleX2}
            y= {0+ this.state.obstacleY2}
            width="18"
            height="18"
            stroke= "none"
            fill= "blue"
          />
          <Rect //three obstacle
            x= {11+ this.state.obstacleX3}
            y= {0+ this.state.obstacleY3}
            width="18"
            height="18"
            stroke= "none"
            fill= "green"
          />
          <Rect //four obstacle
            x= {11+ this.state.obstacleX4}
            y= {0+ this.state.obstacleY4}
            width="18"
            height="18"
            stroke= "none"
            fill= "yellow"
          />

          <Rect //score display box
            x="1"
            y="-38"
            width="98%"
            height="10%"
            fill="white"
            stroke="black"
            strokeWidth="2"
          />
          <Text //score text
            x="50"
            y="-21.5"
            fill="none"
            stroke={this.state.scoreColor}
            fontSize="18"
            fontWeight="bold"
            textAnchor="middle">
            {this.state.score}
          </Text>
          <Rect //user's character
            x={12 + this.state.move}
            y="105"
            width="16"
            height="16"
            strokeWidth="2"
          />
          
          <Rect //hidden button right
            x="50"
            y="-50"
            width="50"
            height="200"
            fill="none"
            stroke="none"
            strokeWidth="2"
            onPress={this.moveRight}
          />
          <Rect //hidden button left
            x="0"
            y="-50"
            width="50"
            height="200"
            fill="none"
            stroke="none"
            strokeWidth="2"
            onPress={this.moveLeft}
          />
        </Svg>
      </View>
    );
  }
}

const MenuStack = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(MenuStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
