$.ajax(
  // для прикладу використовуємо jQuery $.ajax()
  {
    method: "GET", // метод GET
    url: "14.17.json", // URL
    dataType: "json", // очікуємо відповідь у типі JSON
    success: function (
      jsonContents // функція, що виконається у разі успіху
    ) {
      // jsonContents - це параметр що буде містити дані відповіді сервера

      console.log(jsonContents); // відображаємо отримані дані з сервера в консолі
      // подальший код обробки результатів відповіді повинен бути тут
      let div = document.createElement("div");
      div.style.display = "flex";
      let divspan = document.createElement("span");
      divspan.style.marginLeft = "1em";
      divspan.innerHTML = "MYjQuery";
      div.append(divspan);

      div.className = "MYjQuery";

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
    },
    error: function (
      jqXHR,
      textStatus,
      errorThrown // функція, що виконається у разі помилки
    ) {
      console.error(textStatus); // відображаємо текст помилки в консолі браузера
    },
  }
);
