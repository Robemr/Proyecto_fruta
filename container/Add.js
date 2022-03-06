import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, FlatList, Alert, TextInput, StyleSheet, Pressable, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';

const B = props => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>;
const RED = props => <Text style={{ color: 'red' }}>{props.children}</Text>;

export default function AddScreen() {
  const [fruits, setFruits] = useState(null);
  const [price, setPrices] = useState(null);
  const frutas = ['Piña', 'Manzana', 'Melocotón', 'Uvas', 'Naranja', 'Kiwi', 'Plátano', 'Pera'];

  const addFruits = () => {
    if (fruits != "" && price != null) {
      fetch('http://10.0.2.2:8080/fruits', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fruits,
          price: price,
        }),
      })
        .then(responseJson => {
          console.log('getting data from fetch', responseJson);
          Alert.alert('Fruta añadida correctamente');
          setFruits(null);
          setPrices(null);
        })
        .catch(error => console.log(error));
    }

  };

  return (
    <SafeAreaView>
      <View>
        <Text
          style={styles.label}>
          Elije fruta
        </Text>

        <ModalDropdown style={{ alignSelf: 'center', width: 200, marginBottom: 50, }}
          textStyle={{fontSize: 20, color:'green',}}
          defaultValue='Selecciona fruta    v'
          dropdownTextStyle={{fontSize: 20, width:200, color:'gray'}}
         
          onSelect={x => setFruits(frutas[x])} options={frutas}
        />

        <Text style={styles.label}>
          Precio
        </Text>

        <TextInput style={styles.cajaPrecio}
          keyboardType='numeric'
          value={price}
          placeholder="p.ej: 1 / 1.5"          
          onChangeText={x => setPrices(x)}
        />

        <TouchableOpacity onPress={addFruits} style={styles.boton}>
          <Text style={styles.text}>Añadir fruta</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = {
  label: {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontSize: 20
  },

  boton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    marginRight: 100,
    marginLeft: 100,
    marginTop: 200,
  },

  cajaPrecio: {
    height: 40,
    borderColor:'black',
    borderBottomWidth: 1,
    marginRight: 100,
    marginLeft: 100,
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
};