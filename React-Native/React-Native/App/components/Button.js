import React from "react"
import {TouchableOpacity, Image, Text, StyleSheet} from "react-native"

export const Button = ({onPress, text})=> {
    return(
        <TouchableOpacity onPress= {onPress} style={Styles.button}>
            <Image 
                source={require("../assets/images/reverse.png")}
                style={styles.buttonIcon}
                resizeMode="contain"
            />
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}