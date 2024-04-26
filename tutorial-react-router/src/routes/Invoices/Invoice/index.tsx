import { useParams } from "react-router-dom";
import { getInvoice } from "../../../data";

export default function Invoice() {
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <>
      {invoice && (
        <main style={{ padding: "1rem" }}>
          <h2> Total Due: {invoice.due}</h2>
          <p>
            {invoice.name}: {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>
        </main>
      )}
    </>
  );
}
