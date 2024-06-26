import { ReactNode } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { StyleSheet } from "react-native";



function Input({ children } : { children:ReactNode }){
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}


function Field({ ...rest }: TextInputProps){
    return <TextInput 
                style={styles.input}  
                {...rest}
            
            />

}

Input.Field = Field

export { Input }



const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16,
        padding: 8,
        borderColor: 'white',
        borderRadius: 4,
        borderWidth: 0.5,
    },

    input:{
        width: 350,
        height: 35,
        color: 'white',
        paddingLeft: 2,
        borderWidth: 0,
        borderColor: 'transparent'
    }
})
