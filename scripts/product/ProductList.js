import { useProducts } from "./productDataProvider.js";
import { Product } from "./Contact.js";

const contentTarget = document.querySelector('.')

export const product = () => {
    const products = useProducts()
    for (const productObject of products) {
        contentTarget.innerHTML += Product(productObject)
    }
}