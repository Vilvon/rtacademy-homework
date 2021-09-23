// створюємо новий об'єкт XMLHttpRequest
let xhr = new XMLHttpRequest();
// налаштовуємо на GET-запит для URL /countries.json
// (https://rtacademy.net/countries.json)
// xhr.open( method, URL, [async, user, password] )
xhr.open("GET", "14.17.json");
// очікуємо відповідь у типі JSON
xhr.responseType = "json";
// надсилаємо запит
xhr.send();
// додаємо функцію для обробки результата відповіді.
// "onload" відбувається, якщо отримано будь-яку
// відповідь, включаючи відповіді з HTTP-помилкою
// після відповіді сервера ми можемо отримати
// результат запиту в наступних властивостях xhr:
// .status - код стану HTTP (число): 200, 404,...
// .statusText - повідомлення про стан відповіді HTTP
// .response - тіло відповіді сервера
xhr.onload = function () {
  if (xhr.status == 200) {
    // HTTP = 200, все ОК
    console.log(xhr.response);
    // відображаємо отримані дані з сервера в консолі
    // подальший код обробки результатів відповіді
    // повинен бути тут
    let div = document.createElement("div");
    div.style.display = "flex";
    let divspan = document.createElement("span");
    divspan.style.marginLeft = "1em";
    divspan.innerHTML = "MYXMLHttpRequest";
    div.append(divspan);

    div.className = "MYXMLHttpRequest";

    let input = document.createElement("input");

    input.type = "text";
    input.setAttribute("list", "countries");

    let datalist = document.createElement("datalist");

    datalist.id = "countries";

    xhr.response.forEach((element) => {
      let option = document.createElement("option");
      option.append(element.Name);
      datalist.append(option);
    });

    div.prepend(input);
    input.after(datalist);

    document.body.append(div);
  } else {
    // HTTP не 200, обробляємо як помилку
    console.error("Сталася помилка " + xhr.status + ": " + xhr.statusText);
  }
};
// додаємо функцію для обробки помилки підключення до сервера.
// "onerror" відбувається, якщо запит не може бути виконаний,
// наприклад, відсутнє з'єднання або некоректний URL
xhr.onerror = function () {
  console.error("Сталася помилка при виконанні запита до сервера");
};
