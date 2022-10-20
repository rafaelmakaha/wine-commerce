import type { NextPage } from "next";
import CardBtn from "../src/components/button/card/cardBtn";
import Card from "../src/components/card/card";
import { Container } from "../src/components/common/container.style";
import { Wrapper } from "../src/components/common/wrapper.style";
import Filter from "../src/components/filter/filter";
import Grid from "../src/components/grid/grid";

const Home: NextPage = () => {


  return (
    <Container>
      <Filter />
      <Grid>
        <Wrapper>
          <Card />
          <CardBtn />
        </Wrapper>
      </Grid>
    </Container>
  );
};

export default Home;
