import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import BusketDishItem from '../../components/BusketDishItem/Index';
import { useBusketContext } from '../../context/BusketContext';
import {useOrderContext} from '../../context/OrderContext';
import { useNavigation } from '@react-navigation/native';

const Busket = () => {

    const navigate = useNavigation();

    const onCreateOrder = async () => {
        await createOrder();
        navigate.goBack();
    }

    const {restaurant, busketDishes, busketTotalPrice} = useBusketContext();
    const {createOrder} = useOrderContext();

    return (
        <View style={styles.page}>
            <Text style={styles.restName}>{restaurant?.name}</Text>
            <Text style={styles.item}>Your Items</Text>
            
            <FlatList data={busketDishes} renderItem={({item}) => <BusketDishItem busketDish={item}/>} />

            <View style={styles.separator}/>

            <Pressable onPress={onCreateOrder} style={styles.button}>
                <Text style={styles.buttonText}>Create order &#8226; R{busketTotalPrice.toFixed(2)}</Text>
            </Pressable>

        </View>

    );
};

export default Busket;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        marginVertical: 30,
        padding: 10,
    },
    restName: {
        fontSize: 30,
        fontWeight: '800',

    },
    quantityContainer: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 5,
        marginRight: 10,
        paddingVertical: 2,
        borderRadius: 4
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    totalPrice: {
        marginLeft: 'auto',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
    },
    name: {
        fontWeight: '700',
    },
    item: {
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 10
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
