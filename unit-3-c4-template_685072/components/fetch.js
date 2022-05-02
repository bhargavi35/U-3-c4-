let searchNews = async (value) => {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${Countrycode}`);
        let data = await res.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
};
let append = (data,container) => {
//   let aaa = document.getElementById("news");

  data.forEach(({ title }) => {
    let p = document.createElement("p");
    p.innerText = title;

    container.append(p);
  });
};

export {searchNews,append}