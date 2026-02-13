/**
 *
 * 4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)
 *
 */

/*
The Answer :-

* try and catch are working  on error handling where
 * try{} statement is test a block of code for errors
 * catch{} let you handel the error
 * 
 * so try and catch preventing unhandled promise rejections and application crashes., Without try and catch, an unhandled error in an async function will cause an unhandled promise rejection, which can terminate a Node.js process and lead to an unstable application
 
 
 * simple ex on try and catch */

try {
  console.log("print statement "); // this code will be executed

  notIdentifiedterm; // here the error will be caughted

  console.log("statement will not be printed"); /// WILL NOT BE Executed
} catch (err) {
  console.log("Error caught :  " + err); //WILL SHOW THE ERROR
}

/** Example on try and catch related to async and await */

function getUser(userId) {
  return new Promise((resolve, reject) => {
    const users = [
      { id: 1, name: "Ali", age: 25 },
      { id: 2, name: "Ahmed", age: 24 },
      { id: 3, name: "Emad", age: 28 },
    ];
    const user = users.filter((user) => {
      return user.id == userId;
    });

    user ? resolve(user) : reject(new Error("Couldn't find the user"));
  });
}

function getOrder(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orders = [
        { userId: 1, order: "Laptop" },
        { userId: 2, order: "Mic" },
        { userId: 3, order: "Book" },
      ];
      resolve(
        orders.filter((order) => {
          return order.userId == userId;
        }),
      );
    }, 1000);
  });
}

async function ProcessedOrders(userId) {
  try {
    const user = await getUser(userId);
    console.log(user);

    const order = await getOrder(userId);
    console.log(order);
  } catch (err) {
    console.log("Error Catch " + err);
  }
}

ProcessedOrders(1);
