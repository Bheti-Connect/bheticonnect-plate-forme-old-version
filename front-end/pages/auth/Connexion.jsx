    import React, { useState } from "react";
    import * as Components from './Components';
    import  AutoGreet from '../../components/AutoGreet'

    function Connexion() {
        const [signIn, toggle] = useState(true);
        return(
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Créer un Compte</Components.Title>
                        <Components.Input type='text' placeholder='Nom Complet' />
                        <Components.Input type='email' placeholder='E-mail' />
                        <Components.Input type='password' placeholder='Mot de Passe' />
                        <Components.Input type='password' placeholder='Confirmez le mot de passe' />
                        <Components.Button>Je m'inscris</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Connexion</Components.Title>
                        <Components.Input type='email' placeholder='E-mail' />
                        <Components.Input type='password' placeholder='Mot de Passe' />
                        <Components.Anchor href='#'>J'ai oublié le mot de passe !</Components.Anchor>
                        <Components.Button>Connexion</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Bon retour!</Components.Title>
                        <Components.Paragraph>
                            Déjà inscris sur la plate-forme? Veuillez vous connecter à l'aide vos identifiants.
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Connexion
                        </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title><AutoGreet /></Components.Title>
                            <Components.Paragraph>
                                    Inscrivez-vous et commencez votre expérience avec nous
                            </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Inscription
                                </Components.GhostButton> 
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        )
    }

    export default Connexion;