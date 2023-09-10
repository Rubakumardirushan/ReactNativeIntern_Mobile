import React, { useState } from 'react';
import { View, Text, StyleSheet ,TextInput} from 'react-native';
import { WingBlank,Button } from '@ant-design/react-native';


const Login = () =>{
    const [before,after]=useState('waiting for login')
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>(''); 
    const handleLogin = async () => {
        if (!username.trim() && !password.trim()) {
            after('plz enter username and password')
          }else if(!username.trim()){
            after('plz enter the username')
          }else if (!password.trim()){
            after('plz enter the password')
          }
        try {
          const response = await axios.post(
            'https://fakestoreapi.com/auth/login',
            {
              username,
              password,
            }
            
          ); 
          const { token } = response.data;
          after(token); 
        } catch (error) {
          after("login Failed");
        }
      };
  return (
    
    
    <View style={styles.container}>
      <WingBlank>
        <Text style={styles.title}>Login Page</Text>
        <TextInput style={styles.inputbox}
        placeholder='  username'  onChangeText={(text) => setUsername(text)}></TextInput>

        <TextInput
        placeholder='  Password'onChangeText={(text) => setPassword(text)}  style={styles.inputbox}
        secureTextEntry
        
        ></TextInput>

        <Button style={styles.buttons} onPress={handleLogin} >Log in</Button>
        <Text
        >{before}</Text>
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
