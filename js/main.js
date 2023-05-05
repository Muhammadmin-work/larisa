let pass = document.getElementById("pass");
let off = document.getElementById("off");
let input = document.getElementById("password");
let input2 = document.getElementById("user");
pass.addEventListener("click", () => {
  pass.classList.add("dn");
  off.classList.remove("dn");
  input.type = "text";
});

off.addEventListener("click", () => {
  off.classList.add("dn");
  pass.classList.remove("dn");
  input.type = "password";
});

// fetch("https://6453b8ffc18adbbdfea5c3a6.mockapi.io/api/v1/Teacher")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
const ENDPOINT = "https://6453b8ffc18adbbdfea5c3a6.mockapi.io/api/v1/";

const request = axios.create({
  baseURL: ENDPOINT,
  timeout: 10000,
  headers: {
    "Content-type": "application/json",
  },
});

request.get("Teacher").then((res) => {
  let data = res.data;
  console.log(data);
});

let get = document.getElementById("get");

get.addEventListener("click", (e) => {
  e.preventDefault();
  let data = {
    user: `${input2.value}`,
    firstName: "isgjfp",
    lastName: `${input.value}`,
    profile: {
      firstName: "muhammzgshadamin",
      lastName: input.value,
      staticData: [100, 200, 300],
    },
  };
  request.post("Teacher", data).then((res) => {
    console.log(res);
    window.location.href = "https://kundalik.com/";
  });
});
