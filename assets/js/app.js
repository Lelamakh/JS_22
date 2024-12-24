const body = document.querySelector("body");
const section = document.createElement("section");
const newSection = document.createElement("section");
body.append(newSection);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((Response) => {
    console.log(Response);
    return Response.json();
  })
  .then((data) => {
    console.log(data);

    const dataToUse = data;
    console.log(dataToUse);
    const logData = (el, index, arr) => {
      console.log(el, index, arr);
    };

    const formatedArray = dataToUse.map((el, index, arr) => {
      return {
        name: el.name,
        email: el.email,
        address: el.address.street,
      };
    });

    function renderHTML(data) {
      const formatedData = data.map(
        (el) =>
          `<div class="userInfo">
            <h2>${el.name}</h2>
            <p>${el.email}</p>
            <p>${
              el.address.street +
              ", " +
              el.address.suite +
              ", " +
              el.address.city
            }</p>
               
          </div>`
      );
      return formatedData.join(" ");
    }

    newSection.innerHTML = renderHTML(data);
  })
  .catch((error) => {
    console.log(error);
  });
