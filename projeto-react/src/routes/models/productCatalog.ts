import { ReactNode } from "react";
import { itensInfoDTO } from "./itensInfo";

export type productCatalogDTO = {
    imgUrl: string | undefined;
    name: ReactNode;
    price: ReactNode;
    id: number,
    itens: [itensInfoDTO];
}