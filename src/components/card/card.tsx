import { Wine } from "../../types/wine";
import {
  CardContainer,
  CardIcon,
  CardImage,
  DiscountText,
  NameText,
  PriceText,
  VipPriceText,
  WrapperH,
} from "./card.style";

const Card: React.FC<Wine> = ({ id, image, name, price, discount, priceMember, priceNonMember  }) => {
  const priceVip = priceMember.toFixed(2);
  const integer = Math.trunc(priceMember);
  const decimal = priceVip.substring(priceVip.length-2, priceVip.length);
  const priceNonVip = priceNonMember.toFixed(2).replace(".", ",");
  const defaultPrice = price.toFixed(2).replace(".", ",");
  
  return (
    <CardContainer key={id} >
      <CardImage src={image}/>
      <CardIcon src="/selo.png"/>
      <NameText>{name}</NameText>
      <WrapperH>
        <PriceText decor>R$ {defaultPrice}</PriceText>
        <DiscountText>{discount}% OFF</DiscountText>
      </WrapperH>
      <WrapperH>
        <PriceText color="black">Sócio Wine</PriceText>
          <PriceText color="pink">R$<VipPriceText>{integer}</VipPriceText>,{decimal}</PriceText>
      </WrapperH>
        <PriceText>NÃO SÓCIO R$ {priceNonVip}</PriceText>
    </CardContainer>
  );
};

export default Card;
