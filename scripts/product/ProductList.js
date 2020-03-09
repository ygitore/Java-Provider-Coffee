import { useProducts } from "./productDataProvider.js";
import { Product } from "./Product.js";

const contentTarget = document.querySelector('.product_list')

export const product = () => {
    const products = useProducts()
    for (const productObject of products) {
        contentTarget.innerHTML += Product(productObject)
    }
}