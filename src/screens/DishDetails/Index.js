import {View, Text, StyleSheet, Pressable} from 'react-native';
import restaurants from '../../data/restaurants.json';
import {AntDesign} from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const dish = restaurants[0].dishes[0];

const DishDetails = () => {

    const [quantity, setQuantity] = useState(1);
    const navigation = useNavigation();

    const onMinus = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    const onPlus = () => {
        setQuantity(quantity + 1);
    }

    const getTotal = () => {
        return (dish.price * quantity).toFixed(2)
    }

    return (
        
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>

            <View style={styles.separator}/>

            <View style={styles.row}>
                <AntDesign name='minuscircleo' size={60} color={'black'} onPress={onMinus}/>
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name='pluscircleo' size={60} color={'black'} onPress={onPlus}/>
            </View>

            <Pressable onPress={() => navigation.navigate('Busket')} style={styles.button}>
                <Text style={styles.buttonText}>Add {quantity} to basket &#8226; (R{getTotal()})</Text>
            </Pressable>

        </View>

    );
};

export default DishDetails;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        marginVertical: 30,
        padding: 10,
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
    },
    name: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10,
    },
    description: {
        color: 'grey',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20
    },
    button: {
        marginTop: 'auto',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10 
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
        

    },
})
