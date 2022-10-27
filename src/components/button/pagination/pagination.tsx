import { PagButton, PagWrapper } from "./pagination.style";

interface Props {
  setPagNumber: React.Dispatch<React.SetStateAction<number>>;
  numberOfPages: number;
}

const Pagination: React.FC<Props> = ({ setPagNumber, numberOfPages }) => {
  let numOfPages: number[] = [];
  for (let i = 1; i <= numberOfPages; i++) {
    numOfPages.push(i);
  }

  return (
    <PagWrapper>
      {numberOfPages &&
        numOfPages.map((number, index) => <PagButton key={index} onClick={() => setPagNumber(number)}>{number}</PagButton>)}
    </PagWrapper>
  );
};

export default Pagination;
