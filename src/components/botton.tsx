import { TouchableOpacity, TouchableOpacityProps,  Text, StyleSheet, ActivityIndicator } from 'react-native';

type Props = TouchableOpacityProps & {
    title: string,
    isLoading: boolean
}

export function Button({ title, isLoading = false, ...rest}: Props){
    return (
        <>
            <TouchableOpacity style={styles.btn}
                activeOpacity={0.7}
                disabled={isLoading}
            >
                { isLoading ?(
                    <ActivityIndicator />
                 ) : (
                    <Text style={styles.text}>{title}</Text>
                 )
                
                }
            </TouchableOpacity>
        </>
    ) 
}


const styles = StyleSheet.create({
    btn:{
        width: 350,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: "#610CE1",
        marginTop: 20,
        elevation: 2,
    },
    text:{
        color: "#FFF",
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    loading:{
        color: "#1A202C"
    }
})