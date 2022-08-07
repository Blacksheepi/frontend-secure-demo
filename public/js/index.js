const button = document.querySelector("#button");
if (button) {
  button.addEventListener("click", () => {
    const username = document.querySelector("#username").value;
    const amount = document.querySelector("#amount").value;
    const data = new URLSearchParams({ username, amount });
    fetch("http://localhost:3000/transfer", {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      credentials: "include",
      body: data,
    }).then((res) => {
      console.log(res);
      alert("转账成功");
      window.location.href = "http://localhost:3000";
    });
  });
}
