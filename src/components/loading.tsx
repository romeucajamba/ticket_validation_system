import { ActivityIndicator, StyleSheet } from "react-native";


export function Loading(){
    return(
        <ActivityIndicator style={styles.activity} />
    )
}

const styles = StyleSheet.create({
    activity:{
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    }
})