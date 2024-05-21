/*Arquivo de configuração das nossas rotas,
automaticamente o expo router reconhece por causa
do anderLinde*/
//import '../styles/global.css';
import {
    useFonts, 
    Roboto_700Bold,
    Roboto_500Medium, 
    Roboto_400Regular

 } from '@expo-google-fonts/roboto';


import { Slot } from 'expo-router';
import { Loading } from '../components/loading';



export default function Layout(){
   const [fontsLoader] = useFonts({
        Roboto_700Bold,
        Roboto_500Medium, 
        Roboto_400Regular
    })

    if(!fontsLoader){
        return <Loading />
    }


    return (
            <Slot/>
        )
}

