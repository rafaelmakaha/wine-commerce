import styled from "styled-components";
import color from "../../../../public/colors.json";

export const Button = styled.button`
    background-color: ${color.primary.green};
    width: 256px;
    height: 40px;
    font-family: "Lato", sans-serif;
    font-size: 14px;
    color: ${color.neutrals.white};
    border: 1px solid ${color.primary.green};
    border-radius: 4px;
    box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
`