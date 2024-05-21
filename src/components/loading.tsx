import { ActivityIndicator, StyleSheet, Image } from "react-native";


export function Loading(){
    return(
        <ActivityIndicator style={styles.activity} >
            <Image source={require("../../assets/images/yhanko.png")}/>
        </ActivityIndicator>
    )
}

const styles = StyleSheet.create({
    activity:{
        flex: 1,
        backgroundColor: '#610CE1',
        alignItems: 'center',
        justifyContent: 'center',
    }
})