import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'
import Card from '../components/Card'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()
  return(
    <View style={styles.container}>
      <Text style={styles.header}>- DRONE DELIVER -</Text>
      <Text style={styles.header}>Por onde vamos começar?</Text>
      <View style={styles.icons}>
        <TouchableOpacity onPress={()=>navigation.navigate('Radar')}>
          <Card name='Veja o status de seu pedido!' icon='drone' navigateTo='Radar'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Services')}>
          <Card name='Contrate nossos serviços fixos!' icon='cards-variant'/>
        </TouchableOpacity>
      </View>      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#2d2d2d',
    height: '100%',
    display: 'flex',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  header:{
    color: '#fff',
    marginTop: Constants.statusBarHeight+20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  icons:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: '90%',
    width: '100%'
  }
})