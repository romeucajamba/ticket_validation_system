
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import { Input } from '../components/input';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { Button } from '../components/botton';
import { Link } from 'expo-router';



export default function Register(){
    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <Image source={require('../../assets/images/yhanko.png')} style={styles.img} resizeMode='contain'/>
        
        
            <View style={styles.viewInput}>
                <Input>
                    <FontAwesome6 name='user-circle' size={20} color='white' />
                    <Input.Field  placeholder='Nome completo'/>
                </Input>

                <Input>
                    <MaterialIcons name='alternate-email' size={20} color='white' />
                    <Input.Field  placeholder='Digite seu email' keyboardType='email-address'/>
                </Input>

                <Button title='Fazer inscrição' isLoading={false} />

                <Link href="/" style={styles.link}>Já possui ingresso?</Link>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A202C',
        padding: 8
    },
    img:{
        height: 100,
        width: 100,  
    },
    viewInput: {
        width: 350,
        height: 190,
        marginTop: 40,
        gap: 8,
    },
    ticket:{
        color: 'white'
    },
    link:{
        color:"#FFF",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 8
    }
})