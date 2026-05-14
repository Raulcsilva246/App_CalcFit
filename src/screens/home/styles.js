import { StyleSheet, Text, View } from "react-native";

/*PALETA DE CORES
 - PRETO #1B1B1B
 - CINZA #ABA9AD
 - AZUL #24476C
 - AZUL ESCURO #0A122A
 - BRANCO #E6E8E6
*/



export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1B1B',
    alignItems: 'center',

    
  },
containermain: {
  flex: 1,
  backgroundColor: '#1B1B1B',
  
},
containerH: {
  flex: 1,
  backgroundColor: '#1B1B1B',
  alignItems: 'center',
},
  
menu: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',

  backgroundColor: '#0A122A',

  paddingTop: 50,
  paddingBottom: 10,

  borderBottomWidth: 1,
  borderBottomColor: '#24476C',
},
menuItem: {
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
},
itemHistorico: {
  color: '#ffffff'
},
  title: {
    height: 100,
    paddingTop: 40,
    marginBottom: 0,
    paddingVertical: 8,
    borderWidth: 0,
    borderWidth: 0.5,
    color: '#3e77b4',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',

  },
  menuTexto: {
  fontSize: 18,
  color: '#ABA9AD',
  fontWeight: 'bold',
},
menuTextoAtivo: {
  color: '#3e77b4',
},
linhaAtiva: {
  marginTop: 6,

  height: 3,
  width: 100,

  backgroundColor: '#3e77b4',

  borderRadius: 10,
},
  text: {
    marginTop: 8,
    marginBottom: 4,
    paddingLeft: 60,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ABA9AD',

  },
  input: {
    height: 55,
    width: 260,
    paddingVertical: 8,
    borderWidth: 1,
    backgroundColor: '#E6E8E6',
    padding: 16,
    fontSize: 13,
  },
  result: {
    margin: 12,
    fontSize: 28,
    color: '#000'
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: '#3e77b4',
    padding: 10,
    borderRadius: 8,
    marginTop: 50,
    alignItems: 'center',
    margin: 15,
},
buttonclear: {
    height: 50,
    width: 200,
    backgroundColor: '#ABA9AD',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
},
buttonclearH: {
    height: 50,
    width: 200,
    backgroundColor: '#8b7d99',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
    marginLeft: 20,
},

buttonText: {
  color: '#000',
  fontSize: 17,
  fontWeight: 'bold'
},
boxStatus: {
    width: 10,
    marginLeft: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#fff'
},

boxResult: {
    margin: 20,
    backgroundColor: '#E6E8E6',
    borderRadius: 6,
}
  });
