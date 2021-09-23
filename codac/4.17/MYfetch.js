// await не може бути використана на верхньому рівні вкладеності
// тому необхідно створювати async-функцію
(async function () {
  // GET-запит для URL /countries.json
  let response = await fetch("14.17.json");
  if (response.ok) {
    // HTTP = 200, все ОК
    let jsonContents = await response.json(); // читаємо відповідь в форматі JSON
    console.log(jsonContents); // відображаємо отримані дані з сервера в консолі
    // подальший код обробки результатів відповіді повинен бути тут

    let div = document.createElement("div");
    div.style.display = "flex";
    let divspan = document.createElement("span");
    divspan.style.marginLeft = "1em";
    divspan.innerHTML = "MYfetch";
    div.append(divspan);

    div.className = "MYfetch";

    let input = document.createElement("input");

    input.type = "text";
    input.setAttribute("list", "countries");

    let datalist = document.createElement("datalist");

    datalist.id = "countries";

    jsonContents.forEach((element) => {
      let option = document.createElement("option");
      option.append(element.Name);
      datalist.append(option);
    });

    div.prepend(input);
    input.after(datalist);

    document.body.append(div);
  } else {
    // HTTP не 200, обробляємо як помилку
    console.error(
      "Сталася помилка " + response.status + ": " + response.statusText
    );
  }
})();
// завдяки такому синтаксису, ми виконуємо анонімну async-функцію одразу після створення
