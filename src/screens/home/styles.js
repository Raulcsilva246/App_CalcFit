import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#7f7a9b',
    alignItems: 'center',
    
  },
  containermain: {
    flex: 1,
    backgroundColor: '#7f7a9b', 
  },
  title: {
    height: 80,
    width: 400,
    paddingTop: 30,
    marginBottom: 20,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#20232a',
    borderRadius: 30,
    backgroundColor: '#ff9634',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    

    
  },
  text: {
    marginTop: 50,
    marginBottom: 4,
    paddingLeft: 80,
    fontSize: 20,
    fontWeight: 'bold',

  },
  input: {
    height: 40,
    width: 240,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#ffff',
    padding: 16,
    fontSize: 16,
  },
  result: {
    margin: 20,
    fontSize: 30,
    color: '#000'
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: '#ff9634',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin: 15,
},
buttonclear: {
    height: 50,
    width: 200,
    backgroundColor: '#868fdb',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 50,
},

buttonText: {
  color: '#000',
  fontSize: 16,
  fontWeight: 'bold'
},
boxStatus: {
    width: 10,
    height: 10,
    marginLeft: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#fff'
},

boxResult: {
    margin: 20,
    backgroundColor: '#fff'
}
  },
);
