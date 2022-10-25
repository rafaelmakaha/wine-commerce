import styled from "styled-components";
import color from "../../../public/colors.json";

export const FilterContainer = styled.div`
    width: 256px;
    margin-right: 32px;
    border: 1px black solid;
`

export const FilterTitle = styled.p`
    font-family: "Titillium Web", sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin: 0;
`

export const Category = styled.p`
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: ${color.neutrals.dark_gray};
`