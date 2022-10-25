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


  
  return (
    <CardContainer key={id} >
      <CardImage src={image}/>
      <CardIcon src="/selo.png"/>
      <NameText>{name}</NameText>
      <WrapperH>
        <PriceText style={ { textDecoration:"line-through" }}>R$ {price.toFixed(2).replace(".", ",")}</PriceText>
        <DiscountText>{discount}% OFF</DiscountText>
      </WrapperH>
      <WrapperH>
        <PriceText color="black">Sócio Wine</PriceText>
          <PriceText color="pink">R$<VipPriceText>{integer}</VipPriceText>,{decimal}</PriceText>
      </WrapperH>
        <PriceText>NÃO SÓCIO R$ {priceNonMember.toFixed(2).replace(".", ",")}</PriceText>
    </CardContainer>
  );
};

export default Card;
