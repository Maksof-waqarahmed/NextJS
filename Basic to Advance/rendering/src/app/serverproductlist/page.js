import Price from "./products";
const fetchProducts = async () => {
    try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        return data.products;
    } catch (e) {
        console.error(e);
    }
}
export default async function ServerProductList() {
    let data = await fetchProducts();
    console.log(data);
    return (
        <main>
            <h1>Welcome in Ecommerce Website</h1>
            {data.map((product) => {
                const { id, title, description, category, price, rating, stock, thumbnail } = product
                return (
                    <div key={id}>
                        <h4>Title: {title}</h4>
                        <p>Description: {description}</p>
                        <p>Category: {category}</p>
                        <p>Rating: {rating}</p>
                        <p>Stock: {stock}</p>
                        <img src={thumbnail} />
                        <Price price={price}/>
                    </div>
                )
            })}

        </main>
    );
}