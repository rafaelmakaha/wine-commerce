import {
  CardContainer,
  CardImage,
  DiscountText,
  NameText,
  PriceText,
  VipPriceText,
  WrapperH,
} from "./card.style";

const Card: React.FC = () => {
  return (
    <CardContainer>
      <CardImage />
      <NameText>KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK</NameText>
      <WrapperH>
        <PriceText>R$ 37.80</PriceText>
        <DiscountText>60% OFF</DiscountText>
      </WrapperH>
      <WrapperH>
        <PriceText color="black">Sócio Wine</PriceText>
        <PriceText color="pink">R$<VipPriceText>30</VipPriceText>,00</PriceText>
      </WrapperH>
        <PriceText>AAAAAAA</PriceText>
    </CardContainer>
  );
};

export default Card;
