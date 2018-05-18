import React from 'react';
import { Button,View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}

export default DetailsScreen;