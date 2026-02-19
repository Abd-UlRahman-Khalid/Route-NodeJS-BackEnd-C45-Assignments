const http = require("http");

const PORT = 3000;

let users = [
  {
    id: 1,
    name: "Ali",
    age: 30,
    email: "user@gmail.com",
  },
  {
    id: 2,
    name: "Omr",
    age: 30,
    email: "user1@gmail.com",
  },
  {
    id: 3,
    name: "Ahmed",
    age: 30,
    email: "user2@gmail.com",
  },
  {
    id: 4,
    name: "Alaa",
    age: 30,
    email: "user3@gmail.com",
  },
  {
    id: 5,
    name: "Gamal",
    age: 30,
    email: "user4@gmail.com",
  },
];

const server = http.createServer((req, res) => {
  //Routing
  const { method, url } = req;

  if (method === "GET" && url === "/user") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(users));
  } else if (method === "POST" && url === "/user") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const newUser = JSON.parse(body);
      const { name, age, email } = JSON.parse(body);
      const emailExists = users.find((user) => user.email === email);

      if (emailExists) {
        res.writeHead(409, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Email already exists." }));
      } else {
        users.push(newUser);
        res.writeHead(201, { "content-type": "application/json" });
        res.end(
          JSON.stringify({ message: "user added successfully", newUser }),
        );
      }
    });
  } else if (method === "PATCH" && url === "/user") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { id } = JSON.parse(body);
      const user = users.find((user) => user.id === id);

      if (!user) {
        res.writeHead(404, { "content-type": "application/json" });
        return res.end(JSON.stringify({ message: "User ID not found." }));
      }

      const updates = JSON.parse(body);

      if (updates.name) user.name = updates.name;
      if (updates.age) user.age = updates.age;
      if (updates.email) user.email = updates.email;
      res.writeHead(201, { "content-type": "application/json" });
      return res.end(JSON.stringify({ message: "User updated successfully." }));
    });
  } else if (method === "GET" && url.startsWith("/user/")) {
    const id = parseInt(url.split("/")[2]);

    const user = users.find((user) => user.id === id);

    if (!user) {
      res.writeHead(404, { "content-type": "application/json" });
      return res.end(JSON.stringify({ message: "User not found." }));
    }

    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify(user));
  }
});

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}/`);
});
