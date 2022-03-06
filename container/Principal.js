import React, { useEffect, useState } from 'react';
import { Text, View, RefreshControl, Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const RED = props => <Text style={{ color: 'red' }}>{props.children}</Text>;

export default function PrincipalScreen() {
    const [fruits, setFruits] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);

    const wait = timeout => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false), getFruits());
    }, []);

    function getFruits() {
        fetch('http://10.0.2.2:8080/fruits')
            .then(response => response.json())
            .then(responseJson => {
                setFruits(responseJson);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getFruits();
    }, []);

    function renderItem({ item }) {
        if (item.name === 'Piña') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={styles.vistaImagen}>
                        <Image style={styles.imagen}
                            source={require('../assets/pina.png')}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold' }}>
                            {item.name}                           <RED>{item.price}€</RED>
                        </Text>
                    </View>
                </View>
            );
        }

        if (item.name === 'Manzana') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={styles.vistaImagen}>
                        <Image style={styles.imagen}
                            source={require('../assets/manzana.png')}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold' }}>
                            {item.name}                     <RED>{item.price}€</RED>
                        </Text>
                    </View>
                </View>
            );
        }

        if (item.name === 'Melocotón') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={styles.vistaImagen}>
                        <Image style={styles.imagen}
                            source={require('../assets/melocoton.png')}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold' }}>
                            {item.name}                  <RED>{item.price}€</RED>
                        </Text>
                    </View>
                </View>
            );
        }

        if (item.name === 'Uvas') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={styles.vistaImagen}>
                        <Image style={styles.imagen}
                            source={require('../assets/uva.png')}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold' }}>
                            {item.name}                              <RED>{item.price}€</RED>
                        </Text>
                    </View>
                </View>
            );
        }

        if (item.name === 'Naranja') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={styles.vistaImagen}>
                        <Image style={styles.imagen}
                            source={require('../assets/naranja.png')}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold' }}>
                            {item.name}                       <RED>{item.price}€</RED>
                        </Text>
                    </View>
                </View>
            );
        }

        if (item.name === 'Kiwi') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={styles.vistaImagen}>
                        <Image style={styles.imagen}
                            source={require('../assets/kiwi.png')}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold' }}>
                            {item.name}                               <RED>{item.price}€</RED>
                        </Text>
                    </View>
                </View>
            );
        }

        if (item.name === 'Plátano') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={styles.vistaImagen}>
                        <Image style={styles.imagen}
                            source={require('../assets/platano.png')}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold' }}>
                            {item.name}                       <RED>{item.price}€</RED>
                        </Text>
                    </View>
                </View>
            );
        }

        if (item.name === 'Pera') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View style={styles.vistaImagen}>
                        <Image style={styles.imagen}
                            source={require('../assets/pera.png')}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold' }}>
                            {item.name}                             <RED>{item.price}€</RED>
                        </Text>
                    </View>
                </View>
            );
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', margin: 10, width: 270, alignSelf: 'flex-end' }}>
                    Nombre                    Precio
                </Text>
                <FlatList style={{ minHeight: 500, backgroundColor: 'white', }}
                    data={fruits}
                    renderItem={renderItem}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = {
    vistaImagen:{
        width: 150,
        height: 100,
        marginRight: 35,
        marginLeft: 10
    },

    imagen: {
        width: 130,
        height: 80,
        alignSelf: 'center',
        marginTop: 10
    }
}