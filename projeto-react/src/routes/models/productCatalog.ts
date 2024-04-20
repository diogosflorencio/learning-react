import { itensInfoDTO } from "./itensInfo";

export type productCatalogDTO = {
    id: number,
    itens: [itensInfoDTO];
}