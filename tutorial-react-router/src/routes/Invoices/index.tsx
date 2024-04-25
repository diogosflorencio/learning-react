import { Link } from "react-router-dom";
import { getInvoices } from "../../data";

export default function Invoices() {
  const Invoices = getInvoices();
  return (
    <div>
      <nav>
        {Invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
