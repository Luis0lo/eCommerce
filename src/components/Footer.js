import styled from 'styled-components';
import {
  Pinterest,
  Facebook,
  Instagram,
  Twitter,
  Room,
  MailOutline,
  Phone,
} from '@material-ui/icons';

const Container = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
  @media (max-width: 468px) {
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>KnitLand</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi
          eum tenetur? Eveniet, esse. Illum voluptas molestiae voluptatem
          repellat repellendus sint amet! Illum blanditiis illo perferendis non
          rerum odio beatae!
        </Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Whishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Site Developer</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          Manchester, Uk
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          +4576906252
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} />
          contact@knitland.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
