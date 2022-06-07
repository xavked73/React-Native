import React from "react";
import {View, StyleSheet, StatusBar, Image, Dimensions, Text} from "react-native";
import colors from "../constants/Colors";
import {ConversionInput} from "../components/ConversionInput";
import { format } from "date-fns";
import {Button} from "../components/Button";

const screen = Dimensions.get("window")

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.blue
    },
    logoContainer:{
        alignItems: "center",
        justifyContent: "center",
        justifyContent: "center"
    },
    logoBackground:{
        width: screen.width * 0.45,
        height: screen.width * 0.45
    },
    logo:{
        position: "absolute",
        width: screen.width * 0.25,
        height: screen.width *0.25
    },
    textHeader:{
        color: colors.white,
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20
    },
    text:{
        fontSize: 14,
        color: colors.white,
        textAlign: 'center'
    },
    inputContainer: {
        marginBottom: 10
    }
})

export default ()=>{

    const baseCurrency = "USD";
    const quoteCurrency = "GBP";
    const conversionRate = 0.8924;
    const date = "2022-04-13"

    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.blue}/> 
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/images/background.png')}
                    style={styles.logoBackground} 
                    resizeMode="contain"
                />
                <Image 
                    source={require('../assets/images/logo.png')}
                    style={styles.logo} 
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.textHeader}>Converter</Text>
            
            <View style= {styles.inputContainer}>
                <ConversionInput
                    text= {baseCurrency}
                    value="123"
                    onButtonPress={()=> ("à faire")}
                    keyboardType= "numeric"
                    onChangeTrext={(text) => console.log("text", text)}
                />
                <ConversionInput
                    text= {quoteCurrency}
                    value="123"
                    editable= {false}
                    onButtonPress={()=> ("à faire")}
                /> 
            </View>
            
            <Text style={styles.text}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of 
                    ${format(
                        new Date(date), "MMM do, yyyy"
                    )}
                `}
            </Text>  
            <Button text= "Reverse Currencies" onPress={()=> swapCurrencies()} />         
        </View>
    )
}