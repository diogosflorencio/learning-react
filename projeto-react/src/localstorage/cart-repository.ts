import { OrderDTO } from "../routes/models/order";

export function save(cart: OrderDTO) {
    const str = JSON.stringify(cart)
    localStorage.setItem("com.diogo.dscommerce/Cart", str)

}