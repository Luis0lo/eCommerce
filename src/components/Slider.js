import { useState } from 'react';
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';
import styled from 'styled-components';
import { sliderItems } from '../data';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Wrapper = styled.div`
  height: 100px;
  display: flex;
  transition: all 1.5s ease;
  /* -100 cause our first element is Index 0 */
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  @media (max-width: 768px) {
    flex-direction: column;
    height: 35vh;
  }
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
const Image = styled.img`
  height: 80%;
  border-radius: 1rem;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>Show Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
