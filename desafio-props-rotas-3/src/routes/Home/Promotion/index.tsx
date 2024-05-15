import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Promotion() {

    return (
        <main>
        <section>
            <div className="container">
                <div className="mt30 mb30">
                    <Card title="pagina de promoção" />
                </div>
                <div className="dflex">
                    <Link to="/subscribe"><Button text="Quero participar" /></Link>
                </div>
            </div>
        </section>
    </main>
    );
}
