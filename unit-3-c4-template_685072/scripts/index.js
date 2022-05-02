// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { append, searchNews } from "../components/fetch.js";

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

// https://masai-mock-api.herokuapp.com/news/top-headlines?country=
// https://masai-mock-api.herokuapp.com/news?q={query}
``;

let search = (e) => {
  if (e.key === "Enter") {
    let value = document.getElementById("query").value;
    searchNews(value).then((data) => {
      let news = document.getElementById("news");
      news.innerHTML = null;
      append(data.results, news);
    });
  }
};
document.getElementById("query").addEventListener("keydown", search);

function eSearch() {
  console.log(this.id);
  searchNews(value, this.id).then(data);
  console.log(data);

  let results = document.getElementById("results");

  results.innerHTML = null;
  append(data.results, results);

}
for(let el of results){
    el.addEventListener("clcik",eSearch)
}

// let res = await fetch(
//   `https://masai-mock-api.herokuapp.com/news?q=${query}`,
//   {
//     method: "POST",
//     body: DataTransfer,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }
// );

// console.log(data);

// document.get("submit").addEventListener("eSearch", data);
