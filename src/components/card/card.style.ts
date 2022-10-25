import styled from "styled-components";
import color from "../../../public/colors.json";

interface Props {
  color?: string;
}

export const CardContainer = styled.div`
  background-color: ${color.neutrals.white};
  width: 256px;
  height: 333px;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
`;

export const CardImage = styled.img`
  background-color: gray;
  width: 200px;
  height: 178px;
  object-fit: contain;
  margin: 10px 0 0 0;
`;

export const NameText = styled.p`
  width: 90%;
  font-size: 16px;
  color: ${color.neutrals.black};
  overflow-wrap: break-word;
  display: block;
  margin: 6px 0 0 0;
`;

export const PriceText = styled.p<Props>`
  font-size: 12px;
  ${(props) => {
    if (props.color === "black") {
      return `
        color: ${color.neutrals.black};
        `;
    } else if (props.color === "pink") {
      return `
        color: ${color.primary.pink};
        `;
    } else {
      return `
        color: ${color.neutrals.gray};
        `;
    }
  }}
`;

export const DiscountText = styled.p`
  border-radius: 2px;
  padding: 2px 3px;
  font-size: 10px;
  color: ${color.neutrals.white};
  background-color: ${color.primary.orange};
`;
export const WrapperH = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  margin: 6px;
`;
export const VipPriceText = styled.span`
  font-size: 20px;
  line-height: 12px;
`;
