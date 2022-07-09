import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';

const Container = styled.div`
  min-height: 3.75rem;
  /* ${mobile({ backgroundColor: 'red' })} */
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding-top: 2px;
    flex: 0 0 100%;
    order: 2;
  }
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: '200px' })}
`;

const Left = styled.div`
  flex: 1;
  /* text-align: center; */
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Rigth = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>CrochetIsland</Logo>
        </Left>
        <Center>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: 'grey', fontSize: '16px' }} />
          </SearchContainer>
        </Center>
        <Rigth>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </Rigth>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
