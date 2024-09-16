
/**

--------------variables----------------

const : déclarer une variable constante

*/

const a: string = "hello world"
const n: number = 3
const b: boolean = true
const user : {username: string, age: number} = {username: "john", age: 30}
/* on assigne un objet à la variable user.
Un objet est une struture paire valeur clé*/

const str_hello =  "hello world"
/** variable de type string détectée automatiquement par typescript */

/*
var : portée globale, peut engendrer des comportements inattendus
let : portée locale, évite les comportements inattendus
const : porté locale, ne peut pas être réassignée
*/


/*-------------------*/


let myVariable_any;
/* type any : type par défaut de typescript, peut être de n'importe quel type */
myVariable_any = 3
myVariable_any = "hello world"

let Myvariable_nb = 5;

/* impossible de réassigner une string à la variable Myvariable_nb car elle est de type number */

let Myvariable_nb = "hello"


/*-----------------------------------------------------------------------------------------*/

/*-------------Tableaux-----------------*/

let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];

let friends : (number  | string)[] = [];
friends = ["john", "jane", "jack", 4,  5];


/*-------------enum-----------------*/

enum wekday {
    Lundi = 1,
    mardi = 2,
    mercredi = 3,
}

/*
Eum est un type qui pemet de définir un ensemble de valeurs nommées. Pratique pour jours de la semaine,
couleurs, directions, etc.
*/

enum Direction {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
  }

  enum Colors {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE'
  }

  let favoriteColor: Colors = Colors.Green;
  console.log(favoriteColor); // Affiche 'GREEN

/*-------------tuples----------------*/

let person: [string, number];

person = ["John", 25];  // Correct

/*
les tuples sont des types de données qui permettent de
définir un tableau dont la longueur est fixe et où chaque élément a un type spécifique.
*/


let scores: [string, ...number[]]; /* sytaxe de propagation ... */

scores = ["Player1", 10, 20, 30];
scores = ["Player2", 15];


/*-------------boucles----------------*/


for (let i = 0; i < 5; i++) {
    console.log(i); // Affiche 0, 1, 2, 3, 4
}


let count = 0;

while (count < 5) {
  console.log(count); // Affiche 0, 1, 2, 3, 4
  count++;
}



/*-------------fonctions----------------*/

function addTwoNumbers(a: number, b: number): number {
    return a + b;
  }

  // Utilisation de la fonction
  const sum = addTwoNumbers(5, 7);
  console.log(sum); // Affiche: 12


