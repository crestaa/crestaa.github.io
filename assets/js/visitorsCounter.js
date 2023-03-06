const COUNT_URL = "https://api.countapi.xyz";
const NAMESPACE = "default";
const KEY = "b0eab7eb-2b8d-43cd-b0e6-648e4ccb8171";

const counter = document.querySelectorAll("span");
const getCount = async () => {
    const response = await fetch(`${COUNT_URL}/get/${NAMESPACE}/${KEY}`);
    const data = await response.json();
    setValue(data.value);
};

const incrementCount = async () => {
    const response = await fetch(`${COUNT_URL}/hit/${NAMESPACE}/${KEY}`);
    const data = await response.json();
    setValue(data.value);
};

const setValue = (num) => {
    document.getElementById("visits").innerHTML = num;
};
if (localStorage.getItem("hasVisited") == null) {
    incrementCount()
    .then(() => {
        localStorage.setItem("hasVisited", "true");
    })
    .catch((err) => console.log(err));
} else {
    getCount().catch((err) => console.log(err));
}