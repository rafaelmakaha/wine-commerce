import { GridContainer, GridItems, ProductQttTitle } from "./grid.style";

interface Props {
  children: React.ReactNode;
}

const Grid: React.FC<Props> = ({ children }) => {
    
  return (
    <GridContainer>
      <ProductQttTitle>0 produtos encontrados</ProductQttTitle>
      <GridItems>{children}</GridItems>    
    </GridContainer>
  );
};

export default Grid;
