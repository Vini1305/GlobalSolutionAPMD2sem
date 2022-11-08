import {Text,View,StyleSheet,Image} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants'
import Drone from '../components/Drone'

export default function Radar(){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Controle sua entrega!</Text>
            <Image style={styles.img} source={{uri:'https://www.pngall.com/wp-content/uploads/4/Drone-PNG-Photo.png'}}/>
            <Drone />
            <MaterialCommunityIcons name="map-marker-path" size={50} color="#fff" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#2d2d2d',
      height: '100%',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    img:{
        width: 200,
        height: 150,
        margin: 30
    },
    header:{
        color: '#fff',
        marginTop: Constants.statusBarHeight+20,
        fontSize: 20,
        fontWeight: 'bold'
      }
})