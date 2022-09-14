import { Image, Text, TouchableOpacity } from 'react-native';

export default function MainMenuItem(props){
    let loadedimage = null;
    if(props.image) loadedimage = props.image;
    else loadedimage = require('../../resources/placeholder-icon.png');

    return (
        <TouchableOpacity style={props.style.boxitem} onPress={() =>
            props.action() }>
            <Image style={props.style.image} source={loadedimage}  />
            <Text style={{fontSize:16}}> {props.text} </Text>
        </TouchableOpacity>  
    );
}