import { Outlet } from "react-router-dom";
import SubHeader from "../../../components/SubHeader";
import "./styles.css";

export default function Products () {
    return (
        <>
            <SubHeader/>
            <Outlet />
        </>
    );
}