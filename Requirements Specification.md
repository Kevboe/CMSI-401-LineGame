# **5.0 Requirements Specification**

## 5.1      Introduction
  The LineGame program is an iOS-based game that consists of a moving display of lines and obstacles. The user controls the avatar by touch. A tap left or right moves the avatar in that direction. The screen displays a moving path for the duration of the game until the user "loses" that match.
## 5.2. CSCI Component Breakdown
CSCI LineGame is composed of the following CSCs:
### 5.2.1 		Main Screen CSC -- this appears at initial launch of program
#### 5.2.1.1 	Play Button CSU -- launches game screen
#### 5.2.1.2		Leaderboard CSU -- launches high scores
#### 5.2.1.3		Settings CSU -- launches settings screen
### 5.2.2		Game CSC -- displays game in progress
#### 5.2.2.1		Current Score CSU -- displays user’s current score
#### 5.2.2.2		Line CSU -- displays lines on screen
#### 5.2.2.3		Obstacle CSU -- displays obstacles on screen
#### 5.2.2.4		Avatar CSU -- displays user position on screen
#### 5.2.2.5		Control CSU -- tracks user input for movement of avatar
### 5.2.3		Death Screen CSC -- pops up at user’s loss
#### 5.2.3.1		Replay CSU -- allows user to play again
#### 5.2.3.2		Menu CSU -- takes user back to menu
### 5.2.4		Database CSC -- displays high scores
#### 5.2.4.1		Display Top CSU -- displays top 10 highest scores on server
#### 5.2.4.2		Display User CSU -- displays users top 10 highest scores
### 5.2.5		Settings CSC -- allows user to customize experience
#### 5.2.5.1		Username CSU -- allows user to set their screen name

## 5.3 Functional Requirements by CSC

### 5.3.1 Subsystem Divisions

The LineGame shall consist of four different screens: the Main Menu Screen, the Game Screen, the Leaderboard Screen, and the Settings Screen.

### 5.3.2		Main Menu Screen
#### 5.3.2.1		This screen shall be displayed at initial launch.
#### 5.3.2.2		This screen shall have 3 buttons.
		Button 1 will be a play button.
		Button 2 will be a leaderboard button.
		Button 3 will be a settings button.
#### 5.3.2.3 	The Play button shall launch the game screen.
#### 5.3.2.4		The Leaderboard button shall launch the high scores screen.
#### 5.3.2.5		The Settings button shall launch the settings screen.
### 5.3.3		Game Screen
#### 5.3.3.1 	This screen shall launch after the play button is selected.
#### 5.3.3.2		This screen shall display the user’s current score in the top-left corner.
#### 5.3.3.3		This screen shall display a series of random lines moving across the screen.
		The lines will move down the screen in portrait mode.
#### 5.3.3.4		This screen shall display obstacles on lines.
The obstacles will move with the lines keeping their relative positions on those lines.
#### 5.3.3.5		This screen shall display an avatar that maintains its latitudinal position in portrait 		mode.
#### 5.3.3.6		When the user taps the screen, the avatar shall move accordingly.
		A left tap will move the avatar left.
		A right tap will move the avatar right.
#### 5.3.3.7		If the avatar reaches a line break, the game match shall end.
#### 5.3.3.8		If the avatar reaches an obstacle, the game match shall end.
### 5.3.4 		Death Screen
#### 5.3.4.1		This screen shall launch at the end of game match.
#### 5.3.4.2		This screen shall display “Game Over” text.
#### 5.3.4.3		This screen shall display the user’s final score
#### 5.3.4.4		This screen shall have 2 buttons.
		Button 1 will be a play again button.
		Button 2 will be a return to main menu button.
### 5.3.5		Leaderboard Screen
#### 5.3.5.1		This screen shall display top 10 users + scores from server.
		This will be stored in a database.
#### 5.3.5.2		This screen shall display top 10 user scores.
### 5.3.6		Settings Screen
#### 5.3.6.1		This screen shall have a text input box for username.
#### 5.3.6.2		This screen shall have a button for submitting username.
		User’s input will become their username for their scores.

## 5.4 Performance Requirements by CSC
### 5.4.1 Game program opens in 10 seconds
	Once the user selects the icon for the program, the main menu screen should take no more than 10 seconds to appear.
### 5.4.2 Screen Changes in 10 seconds
	Once the user selects an option from the main menu, the screen should take no more than 10 seconds to change.
### 5.4.3 Game Starts in 3 seconds
	Once the game screen appears, the game starts in about 3 seconds.
### 5.4.4 Avatar Responds Immediately During Game
	Once the user taps a side of the screen, the avatar should respond with movement within 2 seconds.
### 5.4.5 Game Ends Within 5 Seconds 
	Once the user loses a game match, the death screen should appear within 5 seconds.

## 5.5 Project Environment Requirements

### 5.5.1 Development Environment Requirements

The following are hardware development requirements for the LineGame App:

Computer with a processor that is capable of running a virtual environment for iOS testing
Server to test and hold our high score database 

The following are software development requirements for the LineGame App:

React Native for iOS development
Database stored on a server to hold user’s highscores

React allows for simple and efficient iOS development and testing. It has a built-in display model for what an iPhone user would see when using our app.


### 5.5.2 Execution Environment Requirements

Following are the hardware requirements for the LineGame App:

iPhone 7 and newer

The processing power of an iPhone 7 or newer is powerful enough to run the game smoothly. It will allow for quick response to user input and smooth graphical updates and collision detection.

The following are the software requirements for the LineApp game:

Newest version of iOS

Since we are new to both iOS and app development we will be focusing on making sure that the LineGame app is accessible to the most amount of users, which we will achieve by developing for the newest version of iOS which most users will be running.
