import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function ClientApp() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
