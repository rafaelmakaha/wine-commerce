import { Catalog } from "../types/catalog";

const getWineCatalog = async (page: number): Promise<Catalog> => {
    const url = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`;
    const response = await (
      await fetch(url)
    ).json();
    return response;
  };
  
  export default getWineCatalog;
  