import { ActivityIndicator, StyleSheet } from "react-native";


export function Loading(){
    return(
        <ActivityIndicator style={styles.activity} />
    )
}

const styles = StyleSheet.create({
    activity:{
        flex: 1,
        backgroundColor: '#610CE1',
        alignItems: 'center',
        justifyContent: 'center'
    }
})