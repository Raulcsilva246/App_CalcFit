import {
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native'

import {
  useState,
  useCallback
} from 'react'

import { useFocusEffect } from '@react-navigation/native'

import { styles } from './styles'

import {
  limparBanco,
  lerBanco
} from './HandleBD'

export function Historico() {

  const [historico, setHistorico] = useState([])

  useFocusEffect(
    useCallback(() => {
      carregarHistorico()
    }, [])
  )

  async function carregarHistorico() {

    const dados = await lerBanco()

    setHistorico(dados)
  }

  async function ClearBD() {

    await limparBanco()

    setHistorico([])
  }

  return (

    <View style={styles.containerH}>

      <FlatList
        data={historico}

        keyExtractor={(item) =>
          item.id.toString()
        }

        contentContainerStyle={{
          paddingBottom: 50
        }}

        ListHeaderComponent={
          <>
            <View style={styles.container}>
              <Text style={styles.title}>
                Histórico
              </Text>
            </View>

            <TouchableOpacity
              style={styles.buttonclearH}
              onPress={ClearBD}
            >
              <Text style={styles.buttonText}>
                Limpar
              </Text>
            </TouchableOpacity>
          </>
        }

        renderItem={({ item }) => (

          <View style={styles.itemHistorico}>

            <Text style={styles.itemHistorico}>
              Gênero: {item.L_genero}
            </Text>

            <Text style={styles.itemHistorico}>
              IMC: {item.L_imc.toFixed(2)}
            </Text>

            <Text style={styles.itemHistorico}>
              Status: {item.L_status}
            </Text>

          </View>
        )}

        ListEmptyComponent={
          <Text style={styles.itemHistorico}>
            Nenhum histórico encontrado
          </Text>
          
        }
        
      />

    </View>
  )
}