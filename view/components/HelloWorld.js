import 'react-native';
import React from "react";
import { Text, View } from "react-native";

export default function HelloWorld(props){
    let message = "Hello World"; 
    if(props.children) message = props.children;
    else if(props.text) message = props.text;
    else if(props.route && props.route.params.text) message = props.route.params.text;

    return (
        <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}> {message} </Text>
        </View>
    );
}