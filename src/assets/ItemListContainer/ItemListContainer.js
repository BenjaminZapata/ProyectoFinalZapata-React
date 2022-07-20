import './ItemListContainer.css';
import ProductCards from './ProductCards';

const ItemListContainer = () =>{
    const product1 = {
        title: "Lapiz Filgo Color x12",
        image: "./assets/img/products/LapizFilgoColor24.jpg",
        price: 423,
        id: 1
    }
    const product2 = {
        title: "Lapiz Bicolor Faber Castell x24",
        image: "./assets/img/products/LapizBicolorFaber24.jpg",
        price: 423,
        id: 2
    }
    return (
        <main>
            <section>
                <h3>Productos</h3>
                <article>
                    <ProductCards data={product1} />
                    <ProductCards data={product2} />
                </article>
            </section>
        </main>
    )
}

export default ItemListContainer;