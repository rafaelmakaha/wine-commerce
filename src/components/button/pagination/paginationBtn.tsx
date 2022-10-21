import { PagButton } from "./paginationBtn.style";

interface Props {
  number: number;
}

const PagBtn: React.FC<Props> = ({ number }) => {
  return (
    <>
      <PagButton>{number}</PagButton>
    </>
  );
};

export default PagBtn;
