import type { NextPage } from "next";
import { Container } from "../src/components/common/container.style";
import Filter from "../src/components/filter/filter";
import Grid from "../src/components/grid/grid";

const Home: NextPage = () => {
  return (
    <Container>
      <Filter />
      <Grid />
    </Container>
  );
};

export default Home;
