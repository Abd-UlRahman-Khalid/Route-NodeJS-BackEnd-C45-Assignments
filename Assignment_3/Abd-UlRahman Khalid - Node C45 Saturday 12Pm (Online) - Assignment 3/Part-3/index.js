/**1-  What is the Node.js Event Loop?

Answer:

The event loop is the core mechanism that allows Node.js to handle asynchronous tasks efficiently. It continuously checks for pending operations and executes them in different phases, ensuring that non-blocking tasks run smoothly while waiting for slower operations to complete.

means that node js will not be blocked till a certain operation is done and go to the next operatial but instade of that the operation that will take some time it will give it to the operating system deal with it and when it done the result but in a queue and the event loop will read it and print it.

ex:  */

console.log("Start");

setTimeout(() => {
  console.log("Done");
}, 2000);

console.log("End");

console.log("________________________________________________________________");

//=====================================================Q. 2==============================================================

/**2-  What is Libuv and What Role Does It Play in Node.js? 
  
  
 Answer:
 
Libuv is a cross-platform support library written in C that was originally built for use with Node.js to enable efficient asynchronous input/output (I/O) operations. At its core, Libuv implements an event loop, which lets Node.js perform non-blocking operations like networking, file system access, timers, and DNS lookups without stopping the main thread. It uses platform-specific mechanisms under the hood, such as epoll on Linux, kqueue on macOS, and IOCP on Windows, but provides a consistent API so developers don’t have to handle OS differences themselves.

In Node.js, Libuv is essential because it powers the event loop and handles asynchronous I/O, allowing Node.js to scale efficiently with many simultaneous operations. It also includes a thread pool for tasks that can’t be non-blocking at the OS level, such as some file system and DNS tasks, so they run in background threads without freezing the rest of the application


 */

console.log("________________________________________________________________");

/**
 * =========================================================Q. 3=====================================================================
 */

/**
 3- How Does Node.js Handle Asynchronous Operations Under the Hood?
 
 Answer:

Node.js is designed to be asynchronous and non-blocking, making it highly efficient for handling multiple operations, Node.js operates on a single-threaded event loop, meaning it executes JavaScript code in a single thread but can still handle multiple tasks concurrently. This is achieved through asynchronous I/O and event-driven programming, allowing Node.js to remain lightweight and performant even under heavy workloads.
In many applications, operations such as reading files, querying databases, or making network requests can take time. If Node.js were synchronous, it would block the entire execution while waiting for these operations to complete, leading to poor performance and scalability. Instead, Node.js delegates such tasks to the system, allowing the event loop to continue executing other code while waiting for the results.

simply the syncronus is a blocking code and the asyncronus is a non-blocking code 
*/

console.log("________________________________________________________________");

/**
 * ====================================================Q. 4=======================================================================
 */

/**
  * 4- What is the Difference Between the Call Stack, Event Queue, and Event Loop in Node.js? 
  
 Answer:
*/

/**the "Call Stack" is a built-in component of the JavaScript runtime and the Task/Event Queue is a component of the client application that contains the JavaScript runtime.

For example,

All browsers include a JavaScript runtime, which you can think of as an application written inside of the larger browser application. The call stack is a list of instructions that are to be called and this is part of the JavaScript runtime. So, if you have a function that calls another function, the call stack includes references to those functions that are being called. The JavaScript runtime is a single-threaded environment - - only one function can be executing at any given time.

Now, your browser is a multi-threaded environment - - the browser can be executing some JavaScript within the JavaScript runtime while it also is playing a video, for example.

When JavaScript requires an asynchronous operation (an operation that runs concurrent to some JavaScript running), the JavaScript runtime can "ask" the client application to place a reference to that function on the task (event) queue. When the JavaScript call task is empty (and no JavaScript operations are happening), the client's event queue is looked at and whatever is the next thing in that queue will be executed by the JavaScript runtime.
 */

console.log("________________________________________________________________");

/**
 * ======================================================Q.  5========================================================================
 */

/**
 *5- What is the Node.js Thread Pool and How to Set the Thread Pool Size?
 * 

 Answer:
 
 The thread pool in Node.js is a collection of threads managed by Libuv. It is responsible for offloading expensive operations — such as file I/O, DNS lookups, or cryptography  so they don’t block the main thread.
 
 The default thread pool size is 4, but you can adjust it using the UV_THREADPOOL_SIZE environment variable

 */

/**
 * ================================================Q. 6 ===============================================================
 */

/**
 *6-  How Does Node.js Handle Blocking and Non-Blocking Code Execution?
 * 
 
Answer:

Blocking code stops everything else until it's finished, while non-blocking code lets other things happen while it's waiting.

Blocking in NodeJS
When your code runs a task, it stops and waits for that task to completely finish before moving on to the next thing. It's like reading a book one word at a time, never skipping ahead.

Non-Blocking in NodeJS
Non-blocking means your program can keep doing other things while a task is running in the background. It doesn't have to stop and wait for that task to finish before moving on.

 */

//block
console.log(
  "============================================================================================= ",
);
console.log("Blocking ");
console.log(
  "============================================================================================= ",
);

function myFunction() {
  console.log("Starting a task...");
  let sum = 0;
  for (let i = 0; i < 100000; i++) {
    sum += i;
  }
  console.log("Task finished!");
  return sum;
}

console.log("Before the function call");
let result = myFunction();
console.log("After the function call");
console.log("Result:", result);

//non-block
console.log(
  "============================================================================================= ",
);
console.log("Non-Block ");
console.log(
  "============================================================================================= ",
);

function myFunction() {
  console.log("Starting a task...");

  setTimeout(() => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    console.log("Task finished!");
    console.log("Result:", sum);
  }, 0);
}

console.log("Before the function call");
myFunction();
console.log("After the function call");
