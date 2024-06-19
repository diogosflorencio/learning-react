import { OrderDTO } from "../routes/models/order";
import * as cartRepository from "../localstorage/cart-repository";

export function saveCart(cart: OrderDTO) {
    cartRepository.save(cart)
}