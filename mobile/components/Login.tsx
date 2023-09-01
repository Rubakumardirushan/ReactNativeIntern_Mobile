import React from 'react';
import { View, Text, StyleSheet ,TextInput} from 'react-native';
import { WingBlank,Button } from '@ant-design/react-native';

const Login = () =>{
  return (
    
    <View style={styles.container}>
      <WingBlank>
        <Text style={styles.title}>Login Page</Text>
        <TextInput style={styles.inputbox}
        placeholder='  username'></TextInput>
        <TextInput
        placeholder='  Password' style={styles.inputbox}></TextInput>
        <Button style={styles.buttons} >Log in</Button>
      </WingBlank>
    </View>
   

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom:40,
    marginRight:20,
    marginLeft:20,
    marginTop:40,
    borderRadius: 30, // Border radius for the form container
    borderWidth: 5, // Border width for the form container
    borderColor: 'black',
    
    
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
   marginLeft:58,
   marginTop:155,
   fontFamily:'Raleway'
   

  },
  inputbox:{
    marginTop:30,
    marginLeft:20,
    marginRight:20,
    borderRadius: 30, // Border radius for the form container
    borderWidth: 2, // Border width for the form container
    borderColor: 'black',
    textAlign:'auto',
    fontSize:20,
    padding:15
    
  },
  buttons:{
marginTop:25,
marginRight:70,
marginLeft:70,
borderRadius: 30,
borderColor: 'black',
borderWidth: 2,
  }
});

export default Login;
