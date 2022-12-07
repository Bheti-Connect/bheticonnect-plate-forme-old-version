import React, { useContext } from "react";

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

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

    

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Nom de votre société d'investissement" />
                <Input type="text" placeholder="Votre " />
                <Input type="text" placeholder="Mot de passe" />
                <Input type="text" placeholder="Confirmez le mot de passe" />
            </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton 
            type="submit"
        >
            S'inscrire
        </SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
            Avez-vous déjà un compte?
            <BoldLink href="#" onClick={switchToSignin}>
            Connexion
            </BoldLink>
        </MutedLink>
        </BoxContainer>
    );
}