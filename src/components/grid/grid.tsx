import { GridContainer, ProductQttTitle } from "./grid.style";

interface Props {
  children: React.ReactNode;
}

const Grid: React.FC<Props> = ({ children }) => {
    
  return (
    <GridContainer>
      <ProductQttTitle>0 produtos encontrados</ProductQttTitle>
      {children}
    </GridContainer>
  );
};

export default Grid;
