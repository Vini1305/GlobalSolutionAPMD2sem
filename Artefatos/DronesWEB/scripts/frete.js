const grandeSp = ["sao paulo", "aruja", "barueri", "biritiba mirim", "caieiras", "cajamar", "carapicuiba", "cotia", "diadema", "embu", "embu-guaçu", "ferraz de vasconcelos", "francisco morato", "franco da rocha", "guararema", "guarulhos", "itapecerica da serra", "itapevi", "itaquaquecetuba", "jandira", "juquitiba", "mairipora", "maua", "mogi das cruzes", "osasco", "pirapora do bom jesus", "poa", "ribeirao pires", "rio grande da serra", "salesopolis", "santa isabel", "santana do parnaiba", "santo andre", "sao bernardo do campo", "sao caetano do sul", "sao lourenço da serra suzano", "suzano", "taboao da serra", "vargem grande paulista"]

function getValues(){
    const end = document.querySelector("#frete").value

    sessionStorage.setItem("END", end)
}

function calculate(){

    getValues()

    let end = sessionStorage.getItem("END")
    
    if (end != null){
        end = end.toLocaleLowerCase()
    }

    if (end == 'mogi das cruzes'){
        alert("O frete para Mogi das Cruzes é de R$25,00")
    }else if (end == 'santos'){
        alert("O frete para Santos é de R$40,00")
    }else if (grandeSp.includes(end)){
        alert("O frete para "+end+ " é de R$10,00")
    }else{
        alert("Desculpe, ainda não atendemos neste endereço.")
    }
}