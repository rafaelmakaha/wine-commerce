import styled from "styled-components";

export const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 832px;
    height: 1279px;
    border: 1px black solid;
`

export const ProductQttTitle = styled.p`
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 30px 0;
`
export const GridItems = styled.div`
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    gap: 30px  32px;
`
