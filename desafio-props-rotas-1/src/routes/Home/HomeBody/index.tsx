import Button from "../../../components/Header/Button";
import Card from "../../../components/Header/Card";

export default function Promotion() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mb30 mt30">
            <Card title="Página inicial" />
          </div>
          <div className="dflex">
            <Button text="Ver promoção" />
          </div>
        </div>
      </section>
    </main>
  );
}
