const Url = "https://vilvon.g2.rtacademy.net/copypast/post_2.json";
let countClic = 0;

class User {
  id;
  firstName;
  lastName;
  /**
   *
   * @param {number} id
   * @param {string} firstName
   * @param {string} lastName
   */
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get getId() {
    return this.id;
  }
  set setId(id) {
    this.id = id;
  }

  get getFirstName() {
    return this.firstName;
  }
  set setFirstName(firstName) {
    this.firstName = firstName;
  }

  get getLastName() {
    return this.lastName;
  }
  set setLastName(lastName) {
    this.lastName = lastName;
  }
}

class Author extends User {
  getAuthorUrl() {}
}

class Cover {
  url;
  alt;

  /**
   *
   * @param {string} url
   * @param {string} alt
   */
  constructor(url, alt) {
    this.url = url;
    this.alt = alt;
  }

  set setUrl(url) {
    this.url = url;
  }
  get getUrl() {
    return this.url;
  }

  set setAlt(alt) {
    this.alt = alt;
  }
  get getAlt() {
    return this.alt();
  }
}

class Category {
  id;
  title;
  alias;

  /**
   *
   * @param {number} id
   * @param {string} title
   * @param {string} alias
   */
  constructor(id, title, alias) {
    this.id = id;
    this.title = title;
    this.alias = alias;
  }

  get getId() {
    return this.id;
  }
  set setId(id) {
    this.id = id;
  }
  get getTitle() {
    return this.title;
  }
  set setTitle(title) {
    this.title = title;
  }
  get setAlias() {
    return this.alias;
  }
  set getAlias(alias) {
    this.alias = alias;
  }
  get getCategoryUrl() {}
}

class Post {
  id;
  title;
  alias;
  author;
  publishDate;
  category;
  cover;
  text;

  /**
   *
   * @param {number} id
   * @param {string} title
   * @param {string} alias
   * @param {Author} author
   * @param {Date} publishDate
   * @param {Category} category
   * @param {Cover} cover
   * @param {string} text
   */
  constructor(id, title, alias, author, publishDate, category, cover, text) {
    this.id = id;
    this.title = title;
    this.alias = alias;
    this.author = author;
    this.publishDate = publishDate;
    this.category = category;
    this.cover = cover;
    this.text = text;
  }

  get getId() {
    return this.id;
  }
  set setId(id) {
    this.id = id;
  }

  get getTitle() {
    return this.title;
  }
  set setTitle(title) {
    this.title = title;
  }

  get getAlias() {
    return this.alias;
  }
  set setAlias(alias) {
    this.alias = alias;
  }

  get getAuthor() {
    return this.author;
  }
  set getAuthor(author) {
    this.author = author;
  }

  get getPublishDate() {
    return this.publishDate;
  }
  set getPublishDate(publishDate) {
    this.publishDate = publishDate;
  }

  get getCategory() {
    return this.category;
  }
  set setCategory(category) {
    this.category = category;
  }

  get getCover() {
    return this.cover;
  }
  set setCover(cover) {
    this.cover = cover;
  }

  set setText(text) {
    this.text = text;
  }
  get getText() {
    return this.text;
  }
}

function ArrToPosts(arrPosts) {
  return arrPosts.map((data) => {
    return new Post(
      data.id,
      data.title,
      data.alias,
      new Author(data.author.id, data.author.first_name, data.author.last_name),
      new Date(data.publish_date),
      data.category.map((element) => {
      /*   console.log(element.id);
        console.log(element.title);
        console.log(element.alias); */
        return new Category(element.id, element.title, element.alias);
      }),
      new Cover(data.cover.url, data.cover.alt),
      data.text_post
    );
  });
}

function getNameMonth(ind) {
  return monthNames[ind];
}

function trnsformDate(date) {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    monthNames[date.getMonth()] +
    " " +
    date.getDay() +
    ", " +
    date.getFullYear()
  );
}

function addAllPosts(posts) {
  posts.forEach((post) => {
    let li = document.createElement("li");

    let h2 = document.createElement("h2");
    h2.className = "name-of-card";
    h2.innerText = post.getTitle;
    // console.log(post.getTitle());

    let span1 = document.createElement("span");
    span1.className = "date-other-card";
    span1.innerText = trnsformDate(post.getPublishDate);
    // console.log(trnsformDate(post.getPublishDate));

    let div = document.createElement("div");
    div.className = "foto-other-card";
    div.style.backgroundImage = "url(" + post.getCover.getUrl + ")";
    // console.log(posts.getCover.getUrl);

    let span2 = document.createElement("span");
    span2.className = "text-other-card";
    span2.innerText = post.getText;
    // console.log(post.getText);

    let div1 = document.createElement("div");
    div1.className = "footer-other-card";

    let div2 = document.createElement("div");
    div2.className = "footer-other-card-line";

    let aTwitter = document.createElement("a");
    aTwitter.href =
      "https://twitter.com/home?status=Check%20out%20this%20article:%20http://theme-preview.com/lika/2018/09/16/finally-weekend/";
    aTwitter.className = "circle-for-icons twitter";

    let itw = document.createElement("i");
    itw.className = "fab fa-twitter";

    let aFacebook = document.createElement("a");
    aFacebook.href =
      "https://www.facebook.com/sharer/sharer.php?u=http://theme-preview.com/lika/2018/09/16/finally-weekend/";
    aFacebook.className = "circle-for-icons facebook";

    let ifa = document.createElement("i");
    ifa.className = "fab fa-facebook-f";

    let aPinterest = document.createElement("a");
    aPinterest.href =
      "https://pinterest.com/pin/create/button/?url=http://theme-preview.com/lika/2018/09/16/finally-weekend/&media=http://theme-preview.com/lika/wp-content/uploads/2018/09/pexels-photo-1540906.jpeg";
    aPinterest.className = "circle-for-icons pinterest";

    let ipi = document.createElement("i");
    ipi.className = "fab fa-pinterest-p";

    aTwitter.append(itw);
    aFacebook.append(ifa);
    aPinterest.append(ipi);

    div1.append(div2);

    div2 = document.createElement("div");
    div2.className = "footer-other-card-line";

    div1.append(aTwitter);
    div1.append(aFacebook);
    div1.append(aPinterest);
    div1.append(div2);

    li.append(h2);
    li.append(span1);
    li.append(div);
    li.append(span2);
    li.append(div1);

   // console.log(li);
    document.getElementById("other-card-ul").append(li);
  });
}

async function getPost(url) {
  try {
    const response = await fetch(url);
    const arrPosts = await response.json();
    const Posts = await ArrToPosts(arrPosts);
    addAllPosts(Posts);
  } catch {
    console.error(error);
  } finally {
  }
}

/* async function getPost(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch {
    console.error(error);
  } finally {
  }

getPost(Url)
  .then((arrPosts) => ArrToPosts(arrPosts))
  .then((Posts) => addAllPosts(Posts));

} */

getPost(Url);

document.getElementById("bt1").onpointerdown = () => {
  countClic++;
  getPost(Url);
};
