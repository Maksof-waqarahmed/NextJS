async function fetchdata(){
    let res = await fetch('https://dummyjson.com/products');
    let data = await res.json();
    return data.products;
}

export default async function Home() {
    // let products = await fetchdata();
    console.log(products);
    return (
        <div>
            <h1>API data with loader</h1>
            {/* {products.map((item) => {
                return <h3 key={item.id}>{item.title}</h3>
            })} */}
        </div>
    );
}

//Loader: indicator hota h jo batata h k kuch prpcess ho rha h load ho rha h kuch 
