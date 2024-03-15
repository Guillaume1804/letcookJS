import search from "./recherche.js";

const section = document.createElement("section");
const div = document.createElement("div");
const h1 = document.createElement("h1");
    

const fetchRecettes = async (main) => {
    const response = await fetch("./js/recettes.json"); 
    const responseJSON = await response.json();

    main.appendChild(section);
    section.classList.add("mw-1320", "m-auto");

    h1.textContent = `Toutes les recettes`
    h1.classList.add("text-center", "my-2")
    section.appendChild(h1)
    
    section.appendChild(div);
    div.classList.add("d-flex", "fw-wrap", "g-2")

    responseJSON.map(({id, title, difficulty, category, description, imageUrl}) => {        
        div.innerHTML += `
            <article
                id="${id}"
                class="meal ${category} f-1-350 br-1 bs-0 overflow-h mw-450 m-auto"
                data-tags="meal,${category}">
                <div class="relative">
                <a href="#">
                    <img
                    src="${imageUrl}"
                    alt="${title}"
                    />
                </a>
                <a href="#" class="overlay absolute">
                    <i class="fa-solid fa-square-arrow-up-right"></i>
                </a>
                <a class="label absolute"> ${category} </a>
                </div>
                <div class="p-1">
                <h2><a href="#">${title}</a></h2>
                <p class="lvl">
                    <u>Difficulté:</u>
                    ${
                        (() => {
                            switch (difficulty) {
                                case 1: return "⭐"
                                case 2: return"⭐ ⭐"
                                case 3: return "⭐ ⭐ ⭐"
                                default: return ""
                            }
                        })()
                    }
                </p>
                <p class="art__exerpt">
                    ${description}
                </p>
                </div>
                <div class="p-1 text-right">
                <a href="#">En savoir plus </a>
                </div>
            </article>
        `

    })
    search(div)
}

export default fetchRecettes;