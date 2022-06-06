import { StyleSheet, FlatList, View } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem/Index';
import restaurants from '../../data/restaurants.json'

export default function HomeScreen() {
  return (
    <View style={styles.page}>
        <FlatList 
        data={restaurants} 
        renderItem={({item}) => <RestaurantItem restaurant={item}/>}
        showsVerticalScrollIndicator={false}
        />
    </View>

  );
}

const styles = StyleSheet.create({

    page: {
        padding: 10,
        paddingVertical: 30,
    }
});
