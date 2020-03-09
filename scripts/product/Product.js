let i = 0;
export const Product = (productObject) => {
    i = i+1
    return `
    <div>
        <ul>Name: ${productObject.name}
            <li>Bean Type: ${productObject.beanType}</li>
            <li>Roast Type: ${productObject.roastType}</li>
            <li>Price: ${productObject.price}</li>
        </ul>
    </div>
    `
}