
import { View, Image, StyleSheet } from 'react-native';
import { Input } from '../components/input';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from '../components/botton';



export default function Home(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/images/yhanko.png')} style={styles.img} resizeMode='contain'/>
        
        
            <View style={styles.viewInput}>
                <Input>
                    <MaterialCommunityIcons name='ticket-confirmation-outline' size={20} color='white' />
                    <Input.Field  placeholder='Digite o teu email'/>
                </Input>

                <Button />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        padding: 8
    },
    img:{
        height: 100,
        width: 100,  
    },
    viewInput: {
        width: 350,
        marginTop: 40,
        gap: 8
    },
    ticket:{
        color: 'white'
    }
})