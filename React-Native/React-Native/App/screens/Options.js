import React from "react";
import {View, ScrollView, Linking, Alert} from "react-native";
import colors from "../constants/Colors";
import {Entypo} from "@expo/vector-icons";
import {RowItem, RowSeparator} from "../components/RowItem";


const openLink= (url)=> Linking.openURL(url).catch(()=>
    Alert.alert("Désolé, le lien est obselête" + "\nRéessayez s'\ il vous plait"))


export default() => {
    return(
        <View style={{marginTop: 25, flex: 1}}>
            <ScrollView>
                <RowItem 
                    title="Themes"
                    onPress= {() => openLink("https://reactnative.dev/")}
                    rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
                />
                <RowSeparator />

                <RowItem 
                    title="React Native"
                    onPress={() => openLink("https://reactnative.dev/docs/getting-started")}
                    rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
                />
                <RowSeparator />

                
            </ScrollView>
        </View>
    )
}
