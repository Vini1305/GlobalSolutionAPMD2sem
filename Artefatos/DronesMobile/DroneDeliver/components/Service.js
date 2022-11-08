import { View,Text,StyleSheet, Alert } from 'react-native';
import { useState } from 'react'

export default function Service({name, info, price, children}){
    const [vipService, setVipService] = useState(price);

    function buy(){
        /*-- para que mostre alertas (não funciona no WEB)
        if (vipService == 'Contrate por R$200,00'){
            Alert.alert(
                "Compra de serviço compartilhado",
                "Deseja realmente comprar o serviço de drones compartilhado com mais 9 usuários? Será descontado o valor acordado de sua conta bancária (200 reais).",
                [
                    {
                        text: "Realizar compra",
                        onPress: () => setVipService("Serviço contratado")
                    },
                    {
                        text: "Cancelar",
                        onPress: () => setVipService(price)
                    }
                ]
            )
        }
        if (vipService == 'Contrate por R$500,00'){
            Alert.alert(
                "Compra de serviço VIP",
                "Deseja realmente comprar o serviço de drones VIP? Será descontado o valor acordado de sua conta bancária (500 reais).",
                [
                    {
                        text: "Realizar compra",
                        onPress: () => setVipService("Serviço contratado")
                    },
                    {
                        text: "Cancelar",
                        onPress: () => setVipService(price)
                    }
                ]
            )
        }
        if (vipService == 'Serviço contratado'){
            Alert.alert(
                "Cancelar serviços de drones",
                "Deseja realmente cancelar o seu serviço de drones? Você pode contratá-lo novamente quando quiser.",
                [
                    {
                        text: "Desejo encerrar o serviço",
                        onPress: () => setVipService(price)
                    },
                    {
                        text: "Cancelar operação",
                        onPress: () => setVipService("Serviço contratado")
                    }
                ]
            )
        }
        */
        if (vipService == 'Contrate por R$200,00'){
            setVipService("Serviço contratado")
        }
        if (vipService == 'Contrate por R$500,00'){
            setVipService("Serviço contratado")
        }
        if (vipService == 'Serviço contratado'){
            setVipService(price)
        }

    }

    return(
        <View style={styles.service}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.info}>{info}</Text>
            <Text style={styles.price} onPress={()=> buy()}>{vipService}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    service:{
        width: '70%',
        height: '30%',
        backgroundColor: '#0F7173',
        margin: 10,
        borderRadius: 6,
        display: 'flex',
        justifyContent:'flex-start',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        color: '#fff',
        paddingTop: '5%',
    },
    info:{
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        paddingTop: '5%',
        maxWidth: '85%'
    },
    price:{
        backgroundColor:'#f38a13',
        width: '85%',
        height: '20%',
        marginTop: '15%',
        textAlign: 'center',
        display:'flex',
        justifyContent:'center',
        color: '#fff',
        borderRadius: 6,
        paddingTop:'5%'
    }
})