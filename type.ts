interface Pokemon{
    name: String,
    number_of_evolutions: 1 | 2 | 3 | null,
};

interface TypeWater extends Pokemon{
    type: "Water"
};

interface TypeFire extends Pokemon{
    type: "Fire"
};

type TypeOf = TypeFire | TypeWater;

const charmander: TypeOf = {
    name: "Charmander",
    number_of_evolutions: 3,
    type: "Fire"   
};