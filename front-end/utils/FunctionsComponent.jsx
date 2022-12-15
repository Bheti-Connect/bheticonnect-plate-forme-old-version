
// handle disable modal
export const closeModal = (tag, setModal) => {
    if (tag.classList.contains("close"))
    {
        const body = document.querySelector("body");
        body.style.overflow = "auto";
        setModal(false);
    }
}

// handle select modal
export const handleSelect = (setSelect, setModal, item) => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    setSelect(item)
    setModal(true)
}


// Fetch POST 
 export const fetch_post = async (url, body_data) => {
    let resp = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:body_data
      })

      let result = await resp.json()

      if (resp.status == 200){
        return result;
      }else{
        console.log(resp);
        //return "error_post_fecth"
      }
 }

 // Fetch GET
 export const fetch_get = (url) => {
    fetch(url, {
    method: 'GET',
    headers:{
        
        'Content-Type':'application/json'
    }
    }).then((res) => {res.json()}).then((result) => {

    return result;

    }).catch((error) => {

    console.log(error);

    })
 }

