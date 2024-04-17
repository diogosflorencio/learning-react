import Card from "../../Card";
import Comments from "../../Comments";
import Footer from "../../Footer";
import Header from "../../Header";

import './styles.css';

export default function Home() {
  return (
    <>
      <Header />
      <section className='dc-container-1'>
        <h2>Venha nos visitar</h2>
        <Card />
        <Card />
      </section>
      <section className='dc-container-2'>
        <h2>O que estão dizendo</h2>
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </section>
      <Footer />
    </>
  );
}
