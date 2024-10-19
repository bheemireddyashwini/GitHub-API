
const body = document.querySelector("body");

let username = document.getElementById("username").value;
async function getApi() {
  try {
    username = document.getElementById("username").value;
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.forEach((element) => {
      let div = document.createElement("div");
      div.innerHTML = `<h2 style="font-size : 20px; color : blue";>${element.name}</h2>
            <span style = color : black; font-size: 18px">${element.created_at} </span>
          `;
      body.appendChild(div);
      div.style.border = "1px solid black";
      div.style.borderRadius = "10px";
      div.style.padding = "20px";
      div.style.marginLeft = "100px";
      div.style.marginRight = "20px";
      div.style.backgroundColor= "white";
      div.style.marginTop = "20px";
      div.style.display = "flex";
      div.style.justifyContent = "space-between";
      const description = document.createElement("p");
      description.textContent = element.description;
      description.style.color = "black";
      description.style.fontSize = "15px";
      description.style.paddingLeft = "30px";
      
      
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
const submit = document.getElementById("submit");
submit.addEventListener("click", getApi);
