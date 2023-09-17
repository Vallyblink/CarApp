import styled from "@emotion/styled"

export const CardWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
width: 274px;
height: 426px;
border-radius:8px;
font-family: Manrope;
margin-left: 60px;
`
export const CardImage = styled.img`
object-fit: cover;
width: 100%;
height: 268px !important;
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

export const CarInfo = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #121417;
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  margin-top:12px;
  margin-bottom:8px;
`;

export const CarModel = styled.span`
  color: #3470FF;
`;

export const CarPrice = styled.span`
  font-weight: 500; 
  color: #121417; 
`;


export const Location = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);
  display: flex; 
  gap: 12px;
  align-items: center; 
  margin: 0px;
`;

export const Details = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);
  display: flex; 
  gap: 12px;
  align-items: center; 
  margin-top: 8px;
`;

export const Button = styled.button` 
margin-top:24px;
  background-color: #3470FF; 
  color: #fff; 
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
  text-decoration: none;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0B44CD;
; 
  }
`;