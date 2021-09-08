const my_input = document.getElementById("f-input") as HTMLInputElement;

my_input.addEventListener("input", (event) => {
const input = event.currentTarget as HTMLInputElement;
console.log(input);
})