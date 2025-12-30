const country = {
    name: "Netherlands"
};

const name = Symbol("name");

country[name] = "Holland";
console.log(country["name"]);
