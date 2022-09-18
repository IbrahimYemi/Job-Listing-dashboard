const SEARCH_BUTTON = document.querySelector(".bar")
const CLOSE_BUTTON = document.querySelector(".close_search")
const SEARCH_BAR = document.querySelector(".search")
const SEARCH_CATEGORIES = document.querySelector("#search_id")
const ELEMENT_BODY = document.querySelector(".body_div")

// code to toggle the search bar
SEARCH_BUTTON.addEventListener("click", function (){
    SEARCH_BAR.style.display = "flex"
});

CLOSE_BUTTON.addEventListener("click", function (){
    SEARCH_BAR.style.display = "none"
});


window.addEventListener("load", fetchData)
function fetchData(){
    fetch('./data.json')
    .then((response) => response.json())
    .then((data) => useData(data))
    useData();
}

function useData(data){
    if(data){
        data.map(element=>{
            ELEMENT_BODY.innerHTML += `<div class="section_card">
            <div class="first_div">
              <span class="border"></span>
              <img src=${element.logo} alt="image">
              <div class="card_details">
                <div class="first_section">
                  <span class="head">${element.company}</span>
                  ${element.new ? '<span class="new">NEW</span>': ""}
                  ${element.featured? '<span class="featured">FEATURED</span>': ""}
                </div>
                <div class="job_role">
                ${element.position}
                </div>
                <div class="last_section">
                  <span class="time">${element.postedAt}</span> *
                  <span class="type">${element.contract}</span> *
                  <span class="country">${element.location}</span> *
                </div>
              </div>
            </div>
            <div class="filter_section">
                <span class="filter">${element.role}</span>
                ${element.languages
                    .map(lang=>{
                    return`<span class="filter">${lang}</span>`
                }).join(" ")}
            </div>
          </div>`
        })
    }
}
