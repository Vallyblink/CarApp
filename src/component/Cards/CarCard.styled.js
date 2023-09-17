import styled from "@emotion/styled"

export const CardWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
width: 274px;
height: 426px;
border-radius:8px;
font-family: Manrope;
`
export const CardImage = styled.img`
object-fit: cover;
width: 100%;
height: 268px;
border-radius:14px;
`
export const FavoriteButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: blue;
  }

  &:active {
    color: blue;
  }
`;