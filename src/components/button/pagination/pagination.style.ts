import styled from "styled-components";
import color from "../../../../public/colors.json";

export const PagButton = styled.button`
    align-self: center;
    background-color: ${color.primary.dark_pink};
    width: 38px;
    height: 38px;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    color: ${color.neutrals.white};
    border: 1px solid ${color.primary.dark_pink};
    border-radius: 3px;
    cursor: pointer;
`
export const PagWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
    background-color: transparent;
`