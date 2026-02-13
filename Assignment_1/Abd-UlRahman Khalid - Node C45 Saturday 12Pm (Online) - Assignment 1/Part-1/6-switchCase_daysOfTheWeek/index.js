let arrOfDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function whatDay(value) {
  switch (value) {
    case 1:
      console.log(arrOfDays[0]);
      break;
    case 2:
      console.log(arrOfDays[1]);
      break;
    case 3:
      console.log(arrOfDays[2]);
      break;
    case 4:
      console.log(arrOfDays[3]);
      break;
    case 5:
      console.log(arrOfDays[4]);
      break;
    case 6:
      console.log(arrOfDays[5]);
      break;
    case 7:
      console.log(arrOfDays[6]);
      break;
    default:
      console.log("Sorry No Day With This Number");
  }
}

whatDay(1);
whatDay(2);
