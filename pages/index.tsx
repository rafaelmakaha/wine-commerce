import type { NextPage } from "next";
import { useState } from "react";
import CardBtn from "../src/components/button/card/cardBtn";
import Pagination from "../src/components/button/pagination/pagination";
import PagBtn from "../src/components/button/pagination/pagination";
import Card from "../src/components/card/card";
import { Container } from "../src/components/common/container.style";
import { Wrapper } from "../src/components/common/wrapper.style";
import Filter from "../src/components/filter/filter";
import Grid from "../src/components/grid/grid";
import getWineCatalog from "../src/services/getWineCatalog";
import { Catalog } from "../src/types/catalog";

const Home: NextPage = () => {
  const [catalog, setCatalog] = useState<Catalog>();
  const [pagNumber, setPagNumber] = useState<number>(1);

  const fetchCatalog = async () => {
    const response = await getWineCatalog(pagNumber);
    if (response) setCatalog(await getWineCatalog(pagNumber));
  };

  fetchCatalog();
  return (
    <Container>
      <Filter />
      <Wrapper>
        <Grid>
          {catalog && 
            catalog.items.map((wine, index) => (
            <Wrapper key={index}>
              <Card {...wine}/>
              <CardBtn />
            </Wrapper>
          ))}
        </Grid>
        {catalog &&
        <Pagination setPagNumber={setPagNumber} numberOfPages={catalog?.totalPages}/>
        }
      </Wrapper>
    </Container>
  );
};

export default Home;
