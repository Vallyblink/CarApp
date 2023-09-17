import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333; 
  padding: 10px 20px;
  color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); 
`;

export const Logo = styled.span`
  font-size: 24px;
`;

export const NavButtons = styled.nav`
  display: flex;
  align-items: center;

  a {
    margin-left: 20px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s ease; 

    &:hover {
      color: #ff6600; 
    }
  }
`;