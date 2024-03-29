import { useState } from 'react';
import { register } from '../redux/apiCalls';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.unsplash.com/photo-1595341595379-cf1cb694ea1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
`;

const Register = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
      register(inputs);
      e.target.reset();
  };

  return (
    <Container>
      <Wrapper>
        <Title>REGISTER</Title>
        <Form onSubmit={handleClick}>
          <Input
            name="name"
            type="text"
            placeholder="name"
            onChange={handleChange}
            required
          ></Input>
          <Input
            name="lastName"
            type="text"
            placeholder="last name"
            onChange={handleChange}
            required
          ></Input>
          <Input
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
            required
          ></Input>
          <Input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
            required
          ></Input>
          <Input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            required
          ></Input>
          <Input
            name="passwordConfirm"
            type="password"
            placeholder="confirm password"
            pattern={inputs.password}
            title="Password doesn't match"
            required
          ></Input>
          <Agreement>
            By creating an account , I consent to the processing of my personal
            data in accordance with <b>PRIVACY POLICE</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
