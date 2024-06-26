import { useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../../../data";

export default function Invoice() {
  const navigate = useNavigate();
  const params = useParams();
  const invoice = getInvoice(Number(params.invoiceId));
  return (
    <>
      {invoice && (
        <main style={{ padding: "1rem" }}>
          <h2> Total Due: {invoice.due}</h2>
          <p>
            {invoice.name}: {invoice.number}
          </p>
          
          <p>Due Date: {invoice.due}</p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
        </main>
      )}
    </>
  );
}
