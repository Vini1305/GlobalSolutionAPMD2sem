import {Text,StyleSheet,View} from 'react-native';
import Constants from 'expo-constants';
import Service from '../components/Service';

export default function Services(){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Dê uma olhada em nossos serviços!</Text>
            <Service name='Tenha seu próprio Drone' info='Contrate seu próprio drone e use quando quiser! Você nem precisa pagar os fretes!' price='Contrate por R$500,00' />
            <Service name='Comparilhe seu drone' info='Seu drone é compartilhado com mais 9 usuários! Utilize sempre que estiver disponível!' price='Contrate por R$200,00' />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#2d2d2d',
      height: '100%',
      display: 'flex',
      justifyContent:'space-around',
      alignItems:'center'
    },
    header:{
        color: '#fff',
        marginTop: Constants.statusBarHeight+20,
        fontSize: 20,
        fontWeight: 'bold'
      }
})