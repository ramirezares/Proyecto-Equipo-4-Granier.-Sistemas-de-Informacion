import Hero from "../ui/Hero";
import Products from "../ui/Products";
import Promotions from "../ui/Promotions";
import Reviews from "../ui/Reviews";
import { Link } from "react-router-dom";
import "./Granier.style.css"

// Cargar con funciones las promos, productos y reseñas a mostrar
const promotions = [
  { name: "Promo #1", image: "promo1.jpg" },
  { name: "Promo #2", image: "promo2.jpg" },
  { name: "Promo #3", image: "promo3.jpg" },
  { name: "Promo #4", image: "promo4.jpg" },
  { name: "Promo #5", image: "promo5.jpg" },
];

const products = [
  { name: "Producto #1", image: "producto1.jpg" },
  { name: "Producto #2", image: "producto2.jpg" },
  { name: "Producto #3", image: "producto3.jpg" },
  { name: "Producto #4", image: "producto4.jpg" },
];

const reviews = [
  { user: "Usuario 1", text: "Reseña del Usuario 1" },
  { user: "Usuario 2", text: "Reseña del Usuario 2" },
  { user: "Usuario 3", text: "Reseña del Usuario 3" },
];

const Granier = () => {
  return (
    <>
      <div className="bg-azul-oscuro-granier">
        <Hero/>
        <Promotions promotions={promotions}/>
        <Products products={products}/>
        <Reviews reviews={reviews}/>
        <div className="our-contacts md:flex-row flex-col md:justify-around  font-robotoRegular p-4 gap-4 ">
          <p className="font-robotoBold md:text-xl mt-3 mx-auto">¿Deseas comunicarte con Nosotros?</p>
          <Link to="/granier/contact" className='rounded-full hover:bg-naranja-unimet border-0 bordered-blue-background'>
          Información de contacto
          </Link>
          <Link to="/granier/sugestions" className='rounded-full hover:bg-naranja-unimet border-0 bordered-blue-background'>
          Sugerencias y reclamos
          </Link>
        </div>
      </div>
    </>
  );
};

export default Granier;
