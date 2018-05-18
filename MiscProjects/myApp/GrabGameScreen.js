import React from 'react';

import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Component,
} from 'react-native'


export default class GrabGameScreen extends React.Component {

	static navigationOptions = {
    title: 'Grab Money',
  };

  state={
    timer:null,
      value:0,
      min:0,
      limit:30,
    }

  constructor(props){
    super(props);
    this.start=this.start.bind(this);
  }

  componentWillMount(){
      this.start();
    }

start(){
  var self = this;
  let timer = setInterval(() => {
            count = this.state.value;
 
            if( this.state.value < this.state.limit) {
                count = this.state.value + 1;
            }
 
            self.setState({
                value: count,
            });
        }, 1000);
  this.setState({timer});
}

click(){
  // {this.componentWillMount.bind(this)};
  this.props.navigation.navigate('Congrats',{
            grabAmount:this.state.value,
        });
}


  render() {
    return (
      <View style={styles.mainContainer}>
      
        <View style={styles.container}> 
        <View style={{flexDirection:'row',alignItems:'center',position:'absolute',bottom:250,marginLeft:150,justifyContent:'center'}}>
        <Text style={{color:'black', fontSize: 50,alignItems:'center',}}>$</Text>
        <Text style={{color:'black', fontSize: 50,alignItems:'center',}}>{this.state.value}</Text>
          </View>
        <View style={ styles.bottomView} >
        <Button style={styles.textStyle} title='GRAB!' onPress={()=>this.click()}></Button>

          </View>
          </View></View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: '#fff',
   paddingTop:470,

  },toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:50,
        paddingBottom:10,
        flexDirection:'row',
    },
    toolbarButton:{
        width: 50,            
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1,
        fontSize:20,
    },
    bottomView:{
 
      width: '100%', 
      height: 80, 
      backgroundColor: '#FFFFFF', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 50,
    },
    textStyle:{
      color: '#fff',
      fontSize:22
    }
});
