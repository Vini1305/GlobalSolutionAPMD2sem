import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Card({name, icon}){

    return(
        <View>
            <View style={styles.icon}>
                <MaterialCommunityIcons name={icon} size={50} color="#f38a13" />
            </View>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    icon:{
        borderRadius: 50,
        backgroundColor: '#0F7173',
        width: 90,
        height: 90,
        alignSelf:'center',
        marginBottom: 10,
        marginTop: 30,
        justifyContent:'center',
        alignContent:'center',
        alignItems: 'center'
    },
    text:{
        color: '#fff',
        fontSize: 15
    }
})