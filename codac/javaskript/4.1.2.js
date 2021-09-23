// я коментар, я не виконаюсь
//alert("Привіт світ!");
/* я також коментар */
console.log("Це повідомлення зʼявиться в консолі браузера");

let dog = {
  name: "Sport",
  bark() {
    console.log(this.name);
  },
};
dog.bark();
