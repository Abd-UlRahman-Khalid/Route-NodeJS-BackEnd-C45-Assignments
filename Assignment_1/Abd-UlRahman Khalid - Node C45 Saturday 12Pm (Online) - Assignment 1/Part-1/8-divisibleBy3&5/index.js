function divisiableByThreeAndFive(value) {
  if (value % 3 == 0 && value % 5 == 0) {
    console.log("Divisible by both");
  } else {
    console.log("Nope !!!");
  }
}

divisiableByThreeAndFive(30);
