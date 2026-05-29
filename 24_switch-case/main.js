const favoriteAnimal = "goldfish";

switch (favoriteAnimal) {
  case "goldfish":
  case "fish":
    console.log("I love fish!");
    break;
  case "cat":
    console.log("I love cats!");
    break;
  case "dog":
    console.log("I love dogs!");
    break;

  default:
    console.log("I never heard of that animal");
    break;
}
