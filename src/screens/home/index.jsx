import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Keyboard } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

export function Home(){

  const [peso, setPeso] = useState('') 
  const [altura, setAltura] = useState('') 
  const [resultado, setResultado] = useState('')
  const [corResultado, setCorResultado] = useState('#fff')

  function handleCalcIMC(){

    const pesoNumero = parseFloat(peso) 
    let alturaTexto = altura.replace(',', '.') 
    let alturaNumero = parseFloat(alturaTexto) 
    if (alturaNumero > 3) { alturaNumero = alturaNumero / 100 }

      if(isNaN(pesoNumero) || isNaN(alturaNumero)){
        setResultado("Insira Numeros validos")
      }else{
        const imc = pesoNumero / (alturaNumero * alturaNumero)

        let status = ''

       switch (true) { 
        case imc < 18.5: 
        status = 'Abaixo do peso' 
        setCorResultado('blue')
        break

        case imc <= 24.9: 
        status = 'Peso normal' 
        setCorResultado('green')
        break

        case imc <= 29.9: 
        status = 'Sobrepeso' 
        setCorResultado('#ffffe0')
        break

        case imc <= 34.9: 
        status = 'Obesidade grau 1' 
        setCorResultado('yellow')
        break

        case imc <= 39.9: 
        status = 'Obesidade grau 2' 
        setCorResultado('orange')
        break

        default: 
        status = 'Obesidade grau 3' 
        setCorResultado('red')
      }

        setResultado(`IMC: ${imc.toFixed(2)}\n${status}`)
        Keyboard.dismiss()


      }
}
 
  function handleClear() {
    setPeso('')
    setAltura('')
    setResultado('')
    setCorResultado('#fff')
}



    return(
      <>
      <View style={styles.containermain}>
      <View style={styles.container}>
        <Text style={styles.title}>Calcule seu IMC</Text>
      </View>

        <Text style={styles.text}>Peso:</Text>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="DIgite peso em Kg. Ex: 70" keyboardType="numeric" value={peso} onChangeText={setPeso}/>
      </View>
        <Text style={styles.text}>Altura:</Text>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Digite Altura. Ex: 175 ou 1.75" keyboardType="numeric" value={altura} onChangeText={setAltura}/>
      

        <TouchableOpacity style={styles.button} onPress={() => handleCalcIMC()}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.buttonclear} onPress={() => handleClear()}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      
        
      </View>

      <View style={styles.boxResult}>

      <Text style={styles.result}>Resultado:</Text>

      <View style={[ styles.boxStatus, { backgroundColor: corResultado } ]}></View>

      <Text style={styles.result}>{resultado}</Text>

        <View>
          
        </View>
      </View>

      

      </View>
      </>
    )
}