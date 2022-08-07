const data = new URLSearchParams({ username: 'b', amount: 100 });
fetch("http://localhost:3000/transfer", {
  method: "post",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  credentials: "include",
  body: data,
}).then((res) => {
  console.log(res);
});