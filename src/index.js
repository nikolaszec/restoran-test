import "./style.css";
import Table from "./classes/Table";
import Pizza from "./classes/Pizza";
import Pasta from "./classes/Pasta";
import Drink from "./classes/Drink";
import Addition from "./classes/Addition";
//Generating tables
const TableOne = new Table("1");
const TableTwo = new Table("2");
const TableThree = new Table("3");
const TableFour = new Table("4");

//PIZZA
const PizzaOne = new Pizza("Capricosa");
const PizzaTwo = new Pizza("Napolitana");
const PizzaThree = new Pizza("Siciliana");
const PizzaFour = new Pizza("Pizza Rome");

//PASTA
const PastaOne = new Pasta("Italiana");
const PastaTwo = new Pasta("Carbonara");
const PastaThree = new Pasta("Pasta Milano");
const PastaFour = new Pasta("Pasta Rome");
const PastaFive = new Pasta("Pasta Firenza");

//DRINKS
const DrinkOne = new Drink("Coca Cola", 0.5);
const DrinkTwo = new Drink("Mineral Water", 0.5);
const DrinkThree = new Drink("Fanta", 0.5);

//ADDITIONS
const AdditionOne = new Addition("pepper");
const AdditionTwo = new Addition("ketchup");
const AdditionThree = new Addition("salt");
const AdditionFour = new Addition("red sauce");
const AdditionFive = new Addition("soy sauce");
