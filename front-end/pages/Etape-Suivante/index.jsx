import { useEffect, useState } from 'react';
import * as Components from './MoreInformation';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import bhetiLogo from '../../assets/images/logoBackground.png'
import styled from 'styled-components';
import { useRouter } from 'next/router';

const index = () => {
    const [moreInfo, toggle] = useState(true);

    const router = useRouter();
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user-info'));
        if(!user) {
            router.push('/');
        }
    })

    return (
        <div className={styles.main}>
            <Components.Container>
                <Components.QuestionInfo moreInfo={moreInfo}>
                    <Components.Form>
                    <Components.Title>ℹ️ Informations</Components.Title>
                        <Components.Paragraph>
                            Cher Investisseur, merci de compléter les informations supplémentaire sur vous et votre entreprise afin d'accéder à la plate-forme.
                        </Components.Paragraph>
                        <Components.Input type='text' placeholder='Votre fonction' />
                        <Components.Input type='text' placeholder="Nom de votre fonds d'investissement" />
                        <Components.Input type='text' placeholder='Website' />
                    </Components.Form>
                </Components.QuestionInfo>

                <Components.OptionChoice moreInfo={moreInfo}>
                    <Components.Form>
                        

                        <Components.Title>Vous êtes ?</Components.Title>
                            <Components.Paragraph>
                                Choisissez une option ci-dessous pour accédez  à la plate-forme.
                            </Components.Paragraph>
                            <Components.Button>Entrepreneur</Components.Button>
                            <Components.Button onClick={(e) => {
                                e.preventDefault();
                                toggle(false);
                            }}>Investisseur</Components.Button>
                        
                    </Components.Form>
                </Components.OptionChoice>

                <Components.OverlayContainer moreInfo={moreInfo}>
                    <Components.Overlay moreInfo={moreInfo}>
                        <Components.LeftOverlayPanel moreInfo={moreInfo}>
                            <Components.Paragraph>
                                    Si vous n'êtes pas investisseur retour au choix d'option.
                            </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                                    Retour
                                </Components.GhostButton> 
                        </Components.LeftOverlayPanel>
                        <Components.RightOverlayPanel moreInfo={moreInfo}>
                            <ImageDiv>
                                <Image className='bheti_image' src={bhetiLogo} />
                            </ImageDiv>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </div>

    )
}

const ImageDiv = styled.div`
    position: absolute;
    width: 55%;
    .bheti_image{
        width: 100%;
        height: 100%;
    }
`;

export default index;