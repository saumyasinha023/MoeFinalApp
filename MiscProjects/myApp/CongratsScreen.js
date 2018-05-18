import React from 'react';
import { Button,View, Text,StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class CongratsScreen extends React.Component {


	  static navigationOptions = {
    title: 'Congratulations!',
  };

  render() {
    const { navigation } = this.props;
    const grabAmount = navigation.getParam('grabAmount', '0');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{textAlign:'center',marginTop:0,fontSize:20,marginBottom:100}}>Congratulations!! You have won {JSON.stringify(grabAmount)} dollars</Text>


        
      </View>
    );
  }
}



export default CongratsScreen;