import React, { useState } from 'react';
import * as Components from './MoreInformation';
import styles from '../../styles/Home.module.css'

const index = () => {
    const [moreInfo, toggle] = useState(false);
    console.log("Richard");
    return (
        <div className={styles.main}>
            <Components.Container>
                <Components.QuestionInfo moreInfo={moreInfo}>
                <Components.Form>
                <Components.Title>Vous êtes ?</Components.Title>
                        <Components.Paragraph>
                            Choisissez une option parmi les deux qui se présente ci-dessous.
                        </Components.Paragraph>
                        <Components.Button>Entrepreneur</Components.Button>

                        <Components.Button onClick={() => toggle(true)}>Investisseur</Components.Button>

                </Components.Form>
                </Components.QuestionInfo>

                <Components.OptionChoice moreInfo={moreInfo}>
                    <Components.Form>
                        <Components.Title>informations</Components.Title>
                        <Components.Paragraph>
                            Merci de compléter les informations supplémentaire sur vous et votre entreprise afin d'accéder à la plate-forme.
                        </Components.Paragraph>
                        <Components.Input type='text' placeholder='Numéro Téléphone' />
                        <Components.Input type='text' placeholder='Adresse' />
                        <Components.Input type='text' placeholder='Nom de votre société' />
                    </Components.Form>
                </Components.OptionChoice>

                <Components.OverlayContainer moreInfo={moreInfo}>
                    <Components.Overlay moreInfo={moreInfo}>
                        <Components.LeftOverlayPanel moreInfo={moreInfo}>
                            <Components.Title>BHETI CONNECT</Components.Title>
                            <Components.Paragraph>
                                Pour utiliser la plate-forme
                            </Components.Paragraph>
                            
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel moreInfo={moreInfo}>

                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
        </Components.Container>
        </div>
        
    )
}

export default index;