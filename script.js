String.prototype.tittleCased = function () {
    if (this.includes(" ")) {
        let divide = this.toLowerCase().split(" ");
        // console.log(divide);

        for (let i = 0; i < divide.length; i++) {
            divide[i] = divide[i][0].toUpperCase() + divide[i].slice(1);
            // console.log(divide[i]);
        }
        return divide.join(" ");
    } else {
        return "not a tittle";
    }
};

let string = "sinta tri";
console.log(string.tittleCased());
