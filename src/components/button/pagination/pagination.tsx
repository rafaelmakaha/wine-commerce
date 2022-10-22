import { PagButton, PagWrapper } from "./pagination.style";

interface Props {
  number: number;
}

const Pagination: React.FC<Props> = ({ number }) => {
  return (
    <PagWrapper>
      <PagButton>1</PagButton>
      <PagButton>2</PagButton>
      <PagButton>3</PagButton>
    </PagWrapper>
  );
};

export default Pagination;
