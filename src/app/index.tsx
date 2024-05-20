
import { View, Image, StyleSheet } from 'react-native';
import { Input } from '../components/input';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from '../components/botton';
import { Link } from 'expo-router';



export default function Home(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/images/yhanko.png')} style={styles.img} resizeMode='contain'/>
        
        
            <View style={styles.viewInput}>
                <Input>
                    <Input.Field  placeholder='Digite o teu email'/>
                    <MaterialCommunityIcons name='ticket-confirmation-outline' size={20} color='white' />
                </Input>

                <Button title='Acessar credêncial' isLoading={false} />

                <Link href="/register" style={styles.link}>Ainda não possui ingresso</Link>
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
        marginTop: 5
    }
})