function navbar(){
    return `
    <h1>
      <a href="./index.html">News App</a>
    </h1>
    <input id="search_input" type="text" placeholder="search" onkeydown="search(event)" >

    `
};
export default navbar;