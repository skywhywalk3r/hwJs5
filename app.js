const drink = "Caffee";
switch (drink) {
  case "Caffee":
    console.log("You choose caffee. Good morning");
    break;

  case "Tea":
    console.log("You choose tea. It's more about relax");
    break;

  case "Juice":
    console.log("You choose good vitamins");
    break;
  default:
    console.log(
      "Undefined drink, please choose another drink Caffee, Tea or Juice.",
    );
}

const dayOfWeek = "Субота".toLowerCase();

if (
  dayOfWeek === "Понеділок" ||
  dayOfWeek === "Вівторок" ||
  dayOfWeek === "Середа" ||
  dayOfWeek === "Четвер" ||
  dayOfWeek === "П'ятниця"
) {
  console.log("Це робочий день. Час до роботи або навчання!");
} else if (dayOfWeek === "Субота" || dayOfWeek === "Неділя") {
  console.log("Це вихідний день! Відпочивайте.");
} else {
  console.log("Некоректна назва дня тижня.");
}


const monthNumber = 5;

if (monthNumber === 12 || monthNumber === 1 || monthNumber ===2) {
    console.log("Пора року - Зима");
} else if (monthNumber >= 3 && monthNumber <= 5) {
    console.log("Пора року - Весна");
} else if (monthNumber >= 6 && monthNumber <=8) {
    console.log("Пора року - Літо");
} else if (monthNumber >= 9 && monthNumber <= 11) {
    console.log("Пора року - Осінь");
} else {
    console.log("Неіснуючий номер місяця, вивберіть від 1 до 12.");
}

const color = "green"

switch (color.toLocaleLowerCase()) {
    case "red": 
    console.log("Stop!");
    break;

    case "green":
    console.log("You can go");
    break;

    case "yellow":
    console.log("You need to wait");
    break;
    default:
        console.log("It's broken")
}

