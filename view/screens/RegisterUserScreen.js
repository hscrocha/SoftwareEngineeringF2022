import React from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import UserController from "../../controller/UserController";

export default function RegisterUserScreen(props){
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    async function submitData(pName,pEmail,pPass){
        const data = {name: pName, email:pEmail, password:pPass};
        const controller = new UserController();
        const newUser = await controller.registerNewUser(data);
        console.log(newUser);
        if(newUser!=null)
            alert('New User Registered Successfully');
        else
            alert('Email already registered.');
        props.navigation.pop();
    }

    return (<>
        <View style={{marginTop:5,marginLeft:10,marginRight:10}}>
            <Text style={{paddingTop:10,fontSize:16}}>Name: </Text>
            <TextInput style={regStyles.input} placeholder='Jane Smith' onChangeText={setName} />

            <Text style={{paddingTop:10,fontSize:16}}>Email: </Text>
            <TextInput style={regStyles.input} placeholder='myemail@domain.com' autoCapitalize={false} onChangeText={setEmail} />

            <Text style={{paddingTop:10,fontSize:16}}>Password: </Text>
            <TextInput style={regStyles.input} secureTextEntry={true} onChangeText={setPassword} />
        </View>
        <View style={{flex:2}}>
            <TouchableOpacity style={regStyles.btnPad} onPress={() => submitData(name,email,password)}>
                <Text style={regStyles.btnText}>Register</Text>
            </TouchableOpacity>
        </View>
    </>
    );
}

const regStyles = StyleSheet.create({
    input: {
       borderColor: "gray",
       width: "100%",
       borderWidth: 1,
       borderRadius: 10,
       padding: 10,
    },
    btnPad:{
        marginRight:10,
        marginLeft:10,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'black',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'white'
      },
      btnText:{
          color:'#fff',
          textAlign:'center',
          fontSize:20,
          paddingLeft : 10,
          paddingRight : 10
      }
    });