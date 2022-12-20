class Cat {
  constructor(name, age, sex, breed, food) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.breed = breed;
    this.food = food;
  }
}

function Save() {
  let name = document.getElementById("catName").value;
  let age = document.getElementById("age").value;

  let sexResult = document.getElementsByName("sex");
  let sex = "";
  for (i = 0; i < sexResult.length; i++) {
    if (sexResult[i].checked) {
      sex += sexResult[i].value;
    }
  }

  let breedResult = document.getElementById("breed");
  let breed = breedResult.options[breedResult.selectedIndex].text;

  let foodResult = document.getElementsByName("food");
  let food = "";
  for (var i = 0; i < foodResult.length; i++) {
    if (foodResult[i].checked) {
      food += foodResult[i].value + " ";
    }
  }

  let cat1 = new Cat(name, age, sex, breed, food);
  console.log(cat1);
}
