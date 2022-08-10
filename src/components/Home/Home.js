import './Home.css';
import FeaturedItems from './FeaturedItems';

function Home () {
    return(
        <>
            <main>
                <header>
                    <aside>
                        <h1>Compra calidad a un buen precio</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra, metus non semper ultricies, eros purus lacinia quam, ac suscipit arcu neque id lectus.</p>
                        <button>Descubre más</button>
                    </aside>
                    <picture>
                        <img src='/assets/img/main-img.png' alt='Zapatillas deportivas'></img>
                    </picture>
                </header>
            </main>
            <FeaturedItems />
        </>
    )
}

export default Home;