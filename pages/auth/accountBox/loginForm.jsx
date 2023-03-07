import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../../context/AuthProvider";


import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../../../components/marginer";
import { AccountContext } from "./accountContext";
import styled from "styled-components";

export const LoginForm = () => {
  const { setAuth } = useContext(AuthContext)

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState(false);

  const tackleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const tacklePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    userRef.current.focus();
    if (localStorage.getItem('user-info')) {
    }
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, password])

  const url = new URL(
    "https://bheti-connect.smirltech.com/api/login"
  );

  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  };

  let item = { email, password }

  const handleSubmit = async (e) => {

    let result = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(item),
    }).then(response => response.json());
    console.warn(email, password)
    if (result.success) {
      localStorage.setItem("user-info", JSON.stringify(result))
    }

  }

  const { switchToSignup } = useContext(AccountContext);

  return (
    <loginFormStyled>
      <BoxContainer>
        <FormContainer >
          <Input
            type='email'
            name='email'
            placeholder="Email"
            ref={userRef}
            autoComplete='off'
            onChange={tackleEmailChange}
            value={email}
            required
          />
          <Input
            type='password'
            name='password'
            onChange={tacklePasswordChange}
            value={password}
            required
            placeholder="Mot de passe"
          />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Vous avez oublié votre mot de passe?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={handleSubmit}>Connexion</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Vous n'avez pas de compte?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            S'inscrire
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </loginFormStyled>
  );
}
