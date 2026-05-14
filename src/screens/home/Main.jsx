import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'

import Home from './Home'
import { Historico } from './Hist'

import { styles } from './styles'

export default function Main() {

  const [tela, setTela] = useState("home")

  return (

    <View style={{ flex: 1 }}>

      {/* MENU */}
      <View style={styles.menu}>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => setTela("home")}
        >

          <Text
            style={[
              styles.menuTexto,
              tela === "home" &&
              styles.menuTextoAtivo
            ]}
          >
            Calculadora
          </Text>

          {
            tela === "home" &&
            <View style={styles.linhaAtiva} />
          }

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => setTela("historico")}
        >

          <Text
            style={[
              styles.menuTexto,
              tela === "historico" &&
              styles.menuTextoAtivo
            ]}
          >
            Histórico
          </Text>

          {
            tela === "historico" &&
            <View style={styles.linhaAtiva} />
          }

        </TouchableOpacity>

      </View>

      {/* TELAS */}
      <View style={{ flex: 1 }}>

        {
          tela === "home"
          ? <Home />
          : <Historico key={Date.now()} />
        }

      </View>

    </View>
  )
}