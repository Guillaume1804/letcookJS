const searchBar = document.getElementById("searchBar");

async function recherche(div, responseJSON) {

    searchBar.addEventListener("input", function(event) {
        const value = event.target.value.toLowerCase();

        const newTab = responseJSON.filter(element => {
            if (element.category.toLowerCase().includes(value) || element.title.toLowerCase().includes(value)) {
                return true
            }
            else {
                return false
            }

            
            
        });
        console.log(newTab)

        div.innerHTML = ""
        
        newTab.map(({id, title, difficulty, category, description, imageUrl}) => {        
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
    });
}

export default recherche;