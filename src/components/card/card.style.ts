import styled from "styled-components";
import color from "../../../public/colors.json";

export const CardContainer = styled.div`
    background-color: ${color.neutrals.white};
    width: 256px;
    height: 333px;
    box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
`

export const CardImage = styled.img`
    background-color: gray;
    width: 200px;
    height: 178px;
    object-fit: contain;
    margin: 10px 0 0 0;
`