import afficherRecettes from "./afficherRecettes.js";
    

const fetchRecettes = async () => {
    const response = await fetch("./js/recettes.json"); 
    const responseJSON = await response.json();

    afficherRecettes(responseJSON)
}

export default fetchRecettes;