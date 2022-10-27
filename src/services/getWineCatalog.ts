import { Catalog } from "../types/catalog";

const getWineCatalog = async (page: number): Promise<Catalog | undefined> => {
    const url = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`;
    try {
      const response = await fetch(url)
      return response.json();
    } catch (e) {
      console.log(e);
      return 
    }
  };
  
  export default getWineCatalog;
  