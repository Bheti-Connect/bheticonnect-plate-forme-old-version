import Swal from 'sweetalert2'


export const ModalTalkToExpert = () => {

    Swal.fire({
        title: "Parler à un Expert",
        text: "Vous êtes nouveau(lle) sur notre espace ! Veuillez prendre rendez-vous avec l'un de nos experts, il vous suffit de cliquer sur le bouton ci-dessous et de suivre les instructions pour sélectionner un créneau horaire qui vous convient. Nous sommes impatients de vous aider à résoudre votre problème ou répondre à vos questions.",
        icon: 'info',
        showCloseButton: false,
        allowOutsideClick: false,
        confirmButtonText: '<a id="rdv-btn" href="https://calendly.com/akouame/45min" target="_blank">Prendre rendez-vous</a>',
        confirmButtonAriaLabel: "sans-serif",
        customClass: {
          title: 'title-sweet-connect',
          icon: 'icon-sweet-connect',
          htmlContainer: 'text-sweet-connect',
          validationMessage: '',
          confirmButton: 'confirm-sweet-connect',
        }
      }).then((result) => {
        if (result.isConfirmed)
        {
          ModalTalkToExpert()
        }
      })
}


export const ModalWaiting = () => {

  Swal.fire({
      title: "Vous êtes en attente",
      text: "Merci de patienter la validation de votre compte par l'administration.",
      icon: 'success',
      showCloseButton: false,
      allowOutsideClick: false,
      showConfirmButton: false,
      confirmButtonAriaLabel: "sans-serif",
      customClass: {
        title: 'title-sweet-connect',
        icon: 'icon-sweet-connect',
        htmlContainer: 'text-sweet-connect',
        validationMessage: '',
      }
    })
}



export const ModalConnect = (hookNavigate) => {

    Swal.fire({
          title: "Se connecter",
          text: `Pour une meilleure experience sur la platforme, veuillez vous connecter ou procéder à la création de votre compte si ce n'est pas encore fait.`,
          icon: 'info',
          showCloseButton: true,
          confirmButtonText: 'Se connecter',
          customClass: {
            title: 'title-sweet-connect',
            icon: 'icon-sweet-connect',
            htmlContainer: 'text-sweet-connect',
            validationMessage: '',
            confirmButton: 'confirm-sweet-connect',
          }
        }).then((result) => {
          if (result.isConfirmed)
          {
            hookNavigate("/connexion")
          }
    })

}