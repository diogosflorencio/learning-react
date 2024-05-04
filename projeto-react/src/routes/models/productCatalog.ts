import { ReactNode } from "react";
import { itensInfoDTO } from "./itensInfo";

export type productCatalogDTO = {
    name: ReactNode;
    price: ReactNode;
    id: number,
    itens: [itensInfoDTO];
}