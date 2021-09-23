const Url = "https://vilvon.g2.rtacademy.net/copypast/post_2.json";
let data = [
  {
    id: 1,
    title: "FINALLY WEEKEND",
    alias: "finally-weekend",
    author: {
      id: 101,
      first_name: "Tobias",
      last_name: "Hagg",
    },
    publish_date: "2016-09-10T14:21:13",
    text_post:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed imperdiet massa. Cras elementum accumsan nun et viverra turpis lacinia",
    category: [
      {
        id: 10,
        title: "GIRL",
        alias: "girl",
      },
      {
        id: 255,
        title: "NATURE",
        alias: "nature",
      },
    ],
    cover: {
      url: "https://vilvon.g2.rtacademy.net/copypast/content/pexels-photo-1540906.jpeg",
      alt: "Nixel Pixel",
    },
  },
];

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
}

function ArrToPosts(Posts) {
  return Posts.map((data) => {
    return new Post(
      data.id,
      data.title,
      data.alias,
      new Author(data.author.id, data.author.first_name, data.author.last_name),
      new Date(data.publish_date),
      data.category.map((element) => {
/*         console.log(element.id);
        console.log(element.title);
        console.log(element.alias); */
        return new Category(element.id, element.title, element.alias);
      }),
      new Cover(data.cover.url, data.cover.alt),
      data.text_post
    );
  });
}

async function getPost(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch {
    console.error(ero);
  } finally {
  }
}

getPost(Url).then((Posts) => console.log(ArrToPosts(Posts)));


