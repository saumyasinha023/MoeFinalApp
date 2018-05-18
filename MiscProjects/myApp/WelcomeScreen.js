import React from 'react';
import { Button,View, Text,StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{textAlign:'center',marginTop:0,fontSize:20,marginBottom:100}}>Welcome!!</Text>

        <Button style={styles.textStyle}
          title="SignIn"
          onPress={() => this.props.navigation.navigate('Settings')}>
        </Button>
        <View style={{flex: 0.2}} />
        <Button style={styles.textStyle}
          title="SignUp"
          onPress={() => this.props.navigation.navigate('SignUp')}>
        </Button>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
      textStyle:{
      color: '#fff',
      fontSize:22,
      marginBottom:10,
      paddingBottom: 40,
      flex:0.5,
    },
});

export default WelcomeScreen;