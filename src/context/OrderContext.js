import { createContext, useContext, useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Order, OrderDish, Busket } from "../models";
import {useAuthContext} from './AuthContext';
import {useBusketContext} from './BusketContext';

const OrderContext = createContext();

const OrderContextProvider = ({children}) => {

    const {dbUser} = useAuthContext();
    const {restaurant, busketTotalPrice, busketDishes, busket} = useBusketContext();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        DataStore.query(Order, (o) => o.userID('eq', dbUser.id)).then(setOrders); 
    });

    const createOrder = async () => {
        // create the order
        const newOrder = await DataStore.save(new Order({
            userID: dbUser.id,
            Restaurant: restaurant,
            status: 'NEW',
            total: busketTotalPrice
        }));

        // add all busket dishes to the order
        await Promise.all(
            busketDishes.map((busketDish) =>
            DataStore.save(
                    new OrderDish({
                        quantity: busketDish.quantity,
                        orderID: newOrder.id,
                        Dish: busketDish.Dish
                    })
                )
            )
        );

        // delete the busket
        await DataStore.delete(busket);

        setOrders([...orders, newOrder]); 

        return newOrder;
    };

    const getOrderById = async (id) => {
        const order = await DataStore.query(Order, id);
        const orderDishes = await DataStore.query(OrderDish, (od) => od.orderID('eq', id));
        return {...order, dishes: orderDishes};
    }

    return (
        <OrderContext.Provider value={{createOrder, orders, getOrderById}}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);