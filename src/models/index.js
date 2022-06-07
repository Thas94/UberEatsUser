// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED"
};

const { Busket, BusketDish, Dish, OrderDish, Order, Restaurant, User } = initSchema(schema);

export {
  Busket,
  BusketDish,
  Dish,
  OrderDish,
  Order,
  Restaurant,
  User,
  OrderStatus
};