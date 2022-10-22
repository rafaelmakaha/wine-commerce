import { Wine } from "./wine";

export interface Catalog {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  items: Array<Wine>;
}
