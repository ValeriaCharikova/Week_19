class ValidatorStatic {
  static isEmail(str) {
    let email = str.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/);
    return email === null ? false : true;
  }

  static isDomain(str) {
    let domain = str.match(/[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,9}/);
    return domain === null ? false : true;
  }

  static isDate(str) {
    let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
    return date === null ? false : true;
  }

  static isPhone(str) {
    let phone = str.match(/\+38\ \([0-9]{3}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/);
    return phone === null ? false : true;
  }
}

console.log(ValidatorStatic.isEmail("alisa@mail.ru"));
console.log(ValidatorStatic.isDomain("itgirlschool.ru"));
console.log(ValidatorStatic.isDate("12.05.2021"));
console.log(ValidatorStatic.isPhone("+7(910)123-45-67"));
