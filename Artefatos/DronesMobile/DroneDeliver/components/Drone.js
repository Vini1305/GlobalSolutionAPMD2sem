import {View,Text,StyleSheet,Alert} from 'react-native';
import { useState } from 'react';


export default function Drone(){
    const [deliveryTest, setDeliveryTest] = useState('Solicitar entrega')
    const [deliveryInfo, setDeliveryInfo] = useState('Solicite uma nova entrega!')

    function setDel(){
        setDeliveryTest('Entregue!')
        setDeliveryInfo('Sua entrega está em andamento! Clique abaixo quando recebê-la.')
    }

    function delivery(){
        /* -- para que mostre alertas (não funciona no WEB)
        if (deliveryTest == 'Solicitar entrega'){
            Alert.alert(
                "Solicitar entrega",
                "Deseja solicitar entrega? Se você não tiver nenhum serviço contratado, será cobrado R$100,00 da sua conta.",
                [
                    {
                        text: "Prosseguir",
                        onPress: () => setDel()
                    },
                    {
                        text: "Cancelar",
                        onPress: () => Alert.alert("Cancelado")
                    }
                ]
            )
        }else{
            setDeliveryTest('Solicitar entrega')
            setDeliveryInfo('Todas as entregas foram recebidas! Solicite uma nova quando quiser!')
        }
        */
        if (deliveryTest == 'Solicitar entrega'){
            setDel()
        }else{
            setDeliveryTest('Solicitar entrega')
            setDeliveryInfo('Todas as entregas foram recebidas! Solicite uma nova quando quiser!')
        }
    }

    return(
        <View style={styles.service}>
            <Text style={styles.title}>Status do Drone</Text>
            <Text style={styles.info}>{deliveryInfo}</Text>
            <Text style={styles.price} onPress={()=> delivery()}>{deliveryTest}</Text>
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