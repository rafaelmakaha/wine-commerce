import type { NextPage } from "next";
import CardBtn from "../src/components/button/card/cardBtn";
import PagBtn from "../src/components/button/pagination/paginationBtn";
import Card from "../src/components/card/card";
import { Container } from "../src/components/common/container.style";
import { Wrapper } from "../src/components/common/wrapper.style";
import Filter from "../src/components/filter/filter";
import Grid from "../src/components/grid/grid";
import getWineCatalog from "../src/services/getWineCatalog";

const Home: NextPage = () => {
  const fetchCatalog = async () => {
    const catalog = await getWineCatalog(1);
    console.log(catalog);
  }
  fetchCatalog();
  return (
    <Container>
      <Filter />
      <Wrapper>
      <Grid>
        <Wrapper>
          <Card />
          <CardBtn />
        </Wrapper>
      </Grid>
      <PagBtn number={1} />
      <PagBtn number={2} />
      <PagBtn number={3} />
      </Wrapper>
    </Container>
  );
};

export default Home;
