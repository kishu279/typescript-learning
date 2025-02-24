function App() {
  // variable and object creation with interfaces
  // let name: String = "sourav";
  // console.log(name);

  // interface user {
  //   name: String,
  //   age: number
  // }

  // const user: user = {
  //   name: "sourav",
  //   age: 20,
  // }

  // console.log(user)

  // Classes
  // interface User {
  //   name: String;
  //   age: number;
  // }

  // class UserAcount {
  //   name: String;
  //   age: number;

  //   constructor(name: String, age: number) {
  //     this.name = name;
  //     this.age = age;
  //   }
  // }
  // const user: User = new UserAcount("Sourav", 20);     // while creation we are checking the data passing

  // console.log(user);

  // Function with particular types
  // function add(a: number, b: number): number {
  //   return a + b;
  // }
  // console.log(add(5, 3));

  // type

  // function add(a: number | String, b: number | String): number | String {
  //   if (typeof a === "number" && typeof b === "number") {
  //     return "Number";
  //   } else {
  //     return "String";
  //   }
  // }
  // console.log(add(5, "soinaon"));

  // Unions
  // const MyBool: boolean | number = false; // Union --> gives selection to the user
  // console.log(MyBool);

  // Generics
  // const varStringArray: Array<string> = ["Sourav", "Poddar"];
  // console.log(varStringArray);

  // Declare your own types using generics
  // interface User<Type> {
  //   // passing methods
  //   add: (obj: Type) => void;
  //   get: () => Type;
  // }

  // class UserImpl implements User<string> {
  //   private value: string = "";

  //   add(obj: string): void {
  //     this.value = obj;
  //   }

  //   get(): string {
  //     return this.value;
  //   }
  // }

  // const user1 = new UserImpl();
  // user1.add("sourav");
  // let name = user1.get();
  // console.log(name);

  interface PointLike {
    x: number;
    y: number;
  }

  interface Named {
    name: string;
  }

  function logPoint(point: PointLike) {
    console.log("x= ", point.x, " ,y= ", point.y);
  }
  function logName(point: Named) {
    console.log("Name= ", point.name);
  }

  const obj = {
    x: 0,
    y: 0,
    name: "Origin",
  };

  logPoint(obj);
  logName(obj);

  // class UserImpl
  return <div>Hii this side sourav</div>;
}

export default App;
