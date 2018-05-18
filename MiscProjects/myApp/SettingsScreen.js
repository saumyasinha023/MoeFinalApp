import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,

} from 'react-native';
// import Toast from 'react-native-simple-toast';
import {
  Icon
} from 'react-native-elements'

import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

import { createStackNavigator } from 'react-navigation';


class SignUp extends React.Component {

  static navigationOptions = {
    title: 'Your MOE ID',
  };

  constructor(props) {
    super(props);

    this.state = {
      deviceId:{},
      formData:{},

    }

  }

  handleFormChange(formData){
    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(e, component){
    //console.log(e, component);
  }

    updateValues(){
      var username=""+this.state.formData['firstnamerange']+this.state.formData['firstnamelast']+this.state.formData['firstnamesecondlast']+
      this.state.formData['lastnamerange']+this.state.formData['lastnamefirst']+this.state.formData['lastnamesecond']+this.state.formData['schoolfirst']+this.state.formData['schoolfirst']+
      this.state.formData['schoolsecond']+this.state.formData['evenodd']+this.state.formData['birthmonth']+this.state.formData['daynumeral']+this.state.formData['secondplace']+
      this.state.formData['siblingsnumber']+this.state.formData['motherfirst']+this.state.formData['mothersecond'];

      return fetch('http://localhost:8000/api/moeResource/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    
    
    firstnamerange: this.state.formData['firstnamerange'],
    firstnamelast: this.state.formData['firstnamelast'],
    firstnamesecondlast: this.state.formData['firstnamesecondlast'],
    lastnamerange: this.state.formData['lastnamerange'],
    lastnamefirst: this.state.formData['lastnamefirst'],
    lastnamesecond: this.state.formData['lastnamesecond'],
    schoolfirst: this.state.formData['schoolfirst'],
    schoolsecond: this.state.formData['schoolsecond'],
    evenodd: this.state.formData['evenodd'],
    birthmonth: this.state.formData['birthmonth'],
    daynumeral: this.state.formData['daynumeral'],
    secondplace:this.state.formData['secondplace'],
    siblingsnumber: this.state.formData['siblingsnumber'],
    motherfirst: this.state.formData['motherfirst'],
    mothersecond: this.state.formData['mothersecond'],
    userName:username
  }),
});

    // return fetch('http://127.0.0.1:8000/api/moeResource/1')
    //   .then((response) => response.json())
    //   .then((responseJson) => {

    //     this.setState({
    //       formData: responseJson
    //     }, function(){

    //     });

    //   })
    //   .catch((error) =>{
    //     console.error(error);
    //   });
    //   // Toast.show(""+formData)
  }


  render() {
    return(
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarButton}>Home</Text>
          <Text style={styles.toolbarTitle}>Grab Money</Text>
          <Text style={styles.toolbarButton}>Menu</Text>
        </View>

      <Text style={{textAlign:'center',marginTop:10}}>
        We do not collect personal identification. We link your experiment results with study codes.

        Study codes are composed of elements that are known to you, but not to us. It is easy for you to recreate the study code. In contrast, it is almost impossible for us to guess your study code.

        The study code is valid for all MOE experiments.
        Please note that you need to be able to recreate the study code, if you want to pickup earned payoffs.
        </Text>

      <ScrollView keyboardShouldPersistTaps="always">
        <Form
          ref='deviceIdForm'
          onFocus={this.handleFormFocus.bind(this)}
          onChange={this.handleFormChange.bind(this)}
          style={{padding:10}}
          >
            <Separator
                  label="Your First Name" // optional: if present it will show the text
            />
            <PickerField style={styles.itemStyle}
            ref='firstnamerange'
              label='First Letter in Range'
              options={letterrange}
              value = ''
              
              iconRight={
                <Icon name='check-circle'
                  size={15}
                  iconStyle={[
                    {marginBottom:10, color:'#d52222' },
                    ((self)=>{
                        if(!this.state.formData['firstnamerange'] == '') return {color:'#4cd964'};
                      }
                    )(this)]}
                />
              }
              />
            <PickerField style={styles.itemStyle} ref='firstnamelast'
              label='Last Letter'
              options={letters}
              placeholder={'If your first name is John, choose \u0027N\u0027.'}
              />
            <PickerField style={styles.itemStyle} ref='firstnamesecondlast'
              label='Second to Last Letter'
              options={letters}
               placeholder={'If your first name is John, choose \u0027H\u0027.'}
              />
            <Separator
                  label="Your Last Name" // optional: if present it will show the text
            />
            <PickerField style={styles.itemStyle} ref='lastnamerange'
              label='Last Letter in Range'
              options={letterrange}
              placeholder={'If your last name is Doe, choose \u0027A-M\u0027.'}/>
            <PickerField style={styles.itemStyle} ref='lastnamefirst'
              label='First Letter'
              options={letters}
              placeholder={'If your last name is Doe, choose \u0027D\u0027.'}/>
            <PickerField style={styles.itemStyle} ref='lastnamesecond'
              label='Second Letter'
              options={letters}
              placeholder={'If your last name is Doe, choose \u0027O\u0027.'}/>
            <Separator
              label="Name of Your First School" // optional: if present it will show the text
            />
            <PickerField style={styles.itemStyle} ref='schoolfirst'
              label='First Letter'
              options= {letters}
              placeholder={'If you went to Random Elementary School, choose \u0027R\u0027.'}/>
            <PickerField style={styles.itemStyle} ref='schoolsecond'
              label='Second Letter'
              options={letters}
              placeholder={'If you went to Random Elementary School, choose \u0027A\u0027.'}/>
            <Separator
              label="Your Birthday" // optional: if present it will show the text
            />
            <PickerField style={styles.itemStyle} ref='birthmonth'
              label='First Letter in Month of Birth'
              options={letterrange}
              placeholder={'If you were born in January, choose \u0027J\u0027.'}/>
            <PickerField style={styles.itemStyle} ref='evenodd'
              label='Year of Birth'
              options={yearrange}
              placeholder={'If you were born in 2017, choose \u0027odd\u0027. If you were born in 2016, choose \u0027even\u0027.'}/>
            <PickerField style={styles.itemStyle} ref='daynumeral'
                label='Day of Birth'
                options={dayrange}
                placeholder={'If you were born on the 14th , choose \u00273\u0027.'}/>
            <PickerField style={styles.itemStyle} ref='secondplace'
              label='Second Letter in Place of Birth'
              options={letters}
              placeholder={'If you were born in Santa Clara, choose \u0027A\u0027.'}/>
            <Separator
                label="Number of Older Siblings" // optional: if present it will show the text
            />
            <PickerField style={styles.itemStyle} ref='siblingsnumber'
              label='Number'
              options={numbers}
              placeholder={'If your have three siblings, choose\u00273\u0027.'}/>
            <Separator
              label="Your Mother's First Name" // optional: if present it will show the text
            />
            <PickerField style={styles.itemStyle} ref='motherfirst'
              label='First Letter'
              options= {letters}
              placeholder={'If your mother\u0027s first name is Jane, choose \u0027J\u0027.'}/>
            <PickerField style={styles.itemStyle} ref='mothersecond'
              label='Second Letter'
              options={letters}
              placeholder={'If your mother\u0027s first name is Jane, choose \u0027A\u0027.'}/>
        </Form>


      </ScrollView>
      <View style={ styles.bottomView} >
      <Button style={styles.textStyle} title='Register' onPress={()=>this.updateValues()}></Button>
      </View>

      </View>
    )
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    // return <ExpoConfigView />;
  }
}

const yearrange = {
  "": '',
  1: 'Even Year',
  2: 'Odd Year'
}

const dayrange = {
  "": '',
  1: '1-5',
  2: '6-10',
  3: '11-15',
  4: '16-20',
  5: '21-25',
  6: '26-31',
}

const letterrange = {
  "": '',
  1: 'A-M',
  2: 'N-Z'
}

const letters = {
  "": '',
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  H: 'H',
  I: 'I',
  J: 'J',
  K: 'K',
  L: 'L',
  M: 'M',
  N: 'N',
  O: 'O',
  P: 'P',
  Q: 'Q',
  R: 'R',
  S: 'S',
  T: 'T',
  U: 'U',
  V: 'V',
  W: 'W',
  X: 'X',
  Y: 'Y',
  Z: 'Z',
}

const numbers = {
  "": '',
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar:{
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
    itemStyle:{
      textAlign:'center'
    },
    textStyle:{
      color: '#fff',
      fontSize:22,
      padding:-10
    },
    bottomView:{
      flexDirection:'row',
      width: '100%', 
      height: 80, 
      backgroundColor: '#FFFFFF', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: -10,
    },
  }
);


export default SettingsScreen;
