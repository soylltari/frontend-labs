const container = document.querySelector(".container");
const fetchBtn = document.querySelector("#fetch-btn");

fetchBtn.addEventListener("click", fetchData);

function fetchData() {
  fetch("https://randomuser.me/api")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const person = data.results[0];
      console.log(person);

      displayInHtml(person);
    })
    .catch((err) => {
      console.log(err);
      container.innerHTML = `<p>Something went wrong...</p>`;
    });
}

function displayInHtml(person) {
  const htmlContent = `
        <div class="card">
            <img src='${person.picture.large}'/>
            <div class="info">
              <p>Cell: ${person.cell}</p>
              <p>City: ${person.location.city}</p>
              <p>Postcode: ${person.location.postcode}</p>
              <p>Email: ${person.email}</p>
            </div>
        </div>
    `;
  container.innerHTML = htmlContent;
}
