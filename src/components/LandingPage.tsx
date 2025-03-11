export function LandingPage() {
  return (
    <>
      <div>Landing Page</div>
    </>
  );
}

// INTERFACE
// interface User {
//   name: string;
//   id: number;
// }

// const user: User = {
//   name: "John Doe",
//   id: 123,
// };

// CLASSES
// use it with the classes
// interface User {
//   name: string;
//   id: number;
// }

// class UserAccount {
//   name: string;
//   id: number;

//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }
// }

// const user: User = new UserAccount("John Doe", 1234);
// console.log(user.id);
// console.log(user.name);

// FUNCTIONS ACCEPTING INTERFACES
// function UserName(user: User): number {
//   console.log(user.name);
//   return user.id;
// }

// const uid = UserName(user);
// console.log(uid);

// UNIONS
// type MyNameId = string | number;
// const name: MyNameId = "Sourav";
// const id: MyNameId = 12344;

// console.log(name);
// console.log(id);

// type MyBool = true | false;
// const isTrue: MyBool = true;
// console.log(isTrue);

// type Even = 2 | 3 | 4 | 6 | 8 | 10;
// const even: Even = 4;
// console.log(even);

// function wrapIntoArray(obj: string | string[]) {
//   if (typeof obj === "string") {
//     return [obj];
//   }

//   return obj;
// }

// console.log(wrapIntoArray("sourav"));
// console.log(wrapIntoArray(["sourav", "adi", "rishikesh"]));

//GENERICS
// type StringArray = Array<string>;
// type NumberArray = Array<number>;
// type ObjectwithNameArray = Array<{ name: string }>;

// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }

// declare const backpack: Backpack<string>;

// const object = backpack.get();

// STRUCTURAL TYPE SYSTEM
// interface Point {
//   x: number;
//   y: number;
// }

// function coordinates(p: Point) {
//   console.log(`The coordinates are X: ${p.x}, Y: ${p.y}`);
// }

// const point = { x: 12, y: 13 };
// coordinates(point);

// const point3 = { x: 120, y: 312, z: 423 };
// coordinates(point3);
