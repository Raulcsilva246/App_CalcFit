import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView
} from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { styles } from './styles'
import {
  salvarBanco,
  lerBase,
  Search_Base,
  HandleData
} from './HandleBD'


export default function Home(){

  const [peso, setPeso] = useState('')
  const [genero, setGenero] = useState('')
  const [altura, setAltura] = useState('')
  const [gordura, setGordura] = useState('')
  const [resultado, setResultado] = useState('')
  const [descricao, setDescricao] = useState('')
  const [recomendacoes, setRecomendacoes] = useState('')
  const [corResultado, setCorResultado] = useState('#fff')
  

    

  async function handleCalcIMC(){

    const pesoNumero = parseFloat(peso)
    let alturaNumero = parseFloat(altura.replace(',', '.'))

    if (alturaNumero > 3) {
      alturaNumero = alturaNumero / 100
    }

    // validação
    if (isNaN(pesoNumero) || isNaN(alturaNumero)) {
      setResultado("Insira números válidos!")
      return
    }

    if (!genero) {
      setResultado("Selecione o gênero!")
      return
    }

    const imc = pesoNumero / (alturaNumero * alturaNumero)

    let status = ''

    // classificação diferente por gênero
    if (genero === 'M') {
      switch (true) {
        case imc < 20:
          status = 'Abaixo do peso'
          setCorResultado('blue')
          break
        case imc <= 25:
          status = 'Peso normal'
          setCorResultado('green')
          break
        case imc <= 30:
          status = 'Sobrepeso'
          setCorResultado('#ffffe0')
          break
        default:
          status = 'Obesidade'
          setCorResultado('red')
      }
    }

    if (genero === 'F') {
      switch (true) {
        case imc < 19:
          status = 'Abaixo do peso'
          setCorResultado('blue')
          break
        case imc <= 24:
          status = 'Peso normal'
          setCorResultado('green')
          break
        case imc <= 29:
          status = 'Sobrepeso'
          setCorResultado('#ffffe0')
          break
        default:
          status = 'Obesidade'
          setCorResultado('red')
      }
    }



    await salvarBanco(genero, imc, gordura, status)

     let resultBase = HandleData(Search_Base(genero, status, gordura))
    
   setResultado(`IMC: ${imc.toFixed(2)}\nStatus: ${status}`)

   setDescricao(`${resultBase.descricao}`)
   setRecomendacoes(`->${resultBase.recomendacoes.join('\n->')}`)
    Keyboard.dismiss()
  
  }

  async function handleClear() {
    setPeso('')
    setAltura('')
    setGenero('')
    setResultado('')
    setCorResultado('#fff')
    setGordura('')
  }

  

  return(
    <ScrollView>
    <View style={styles.containermain}>
      <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
    </View>

      <Text style={styles.text}>Gênero</Text>

      <View style={styles.container}>
        <Picker 
          style={styles.input}
          selectedValue={genero}
          onValueChange={(itemValue) => setGenero(itemValue)}
        >
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Masculino" value="M" />
          <Picker.Item label="Feminino" value="F" />
        </Picker>
      </View>

      <Text style={styles.text}>% de Gordura</Text>

      <View style={styles.container}>
        <Picker 
          style={styles.input}
          selectedValue={gordura}
          onValueChange={(itemValue) => setGordura(itemValue)}
        >
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Baixa 0%-15%" value="baixa" />
          <Picker.Item label="Normal 16%-25%" value="normal" />
          <Picker.Item label="Alta +26%" value="alta" />

        </Picker>
      </View>

      <Text style={styles.text}>Peso:</Text>

      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite peso em Kg. Ex: 70"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      </View>

      <Text style={styles.text}>Altura:</Text>

      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite altura. Ex: 175 ou 1.75"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      

      <TouchableOpacity style={styles.button} onPress={handleCalcIMC}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonclear} onPress={handleClear}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>


    </View>
      <View style={styles.boxResult}>
        <Text style={styles.titleText}>Resultado:</Text>

        <View style={[styles.boxStatus, { backgroundColor: corResultado }]} />

        <Text style={styles.result}>{resultado}</Text>


      </View>



      <View style={styles.boxResult}>
        <Text style={styles.titleText}>Descrição:</Text>

        <Text style={styles.result}>{descricao}</Text>


      </View>

      <View style={styles.boxResult}>
        <Text style={styles.titleText}>Recomendações:</Text>

        <Text style={styles.result}>{recomendacoes}</Text>


      </View>
    
    </View>
    </ScrollView>
  )
}