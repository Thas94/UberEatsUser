import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DEFAULT_PICTURE = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg'; 

 const RestaurantItem = ({restaurant}) =>{ 

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Restaurant', {id: restaurant.id});
  }

  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}> 
        <Image source={{
            uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_PICTURE,
        }}
        style={styles.image}/>
        <View style={styles.row}> 
            <View>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>R{restaurant.deliveryFee.toFixed(2)} &#8226; 
                {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text> 
            </View>   
            <View style={styles.rating}>
                <Text>{restaurant.rating.toFixed(1)}</Text>
            </View>     
        </View>
    </Pressable>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
 
    restaurantContainer: {
      width: "100%",
      marginVertical: 10
    },
    image: {
      width: "100%",
      aspectRatio: 5 / 4,
      marginBottom: 5
    },
    title: {
      fontSize: 17,
      fontWeight: "500",
      marginVertical: 5,
    },
    subtitle: {
      color: "grey"
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        marginLeft: 'auto',
        backgroundColor: 'lightgrey',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20       
    }
  
  });
  