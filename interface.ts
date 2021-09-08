interface ProfissionalSaude{
    nome: String,
    salario: Number,
    area: "enfermeiro(a)" | "médico(a)"
}

const carla: ProfissionalSaude = {
    nome: "Carla",
    salario: 10000,
    area: "médico(a)"
}

interface PossuiCarro extends ProfissionalSaude {
    possuiCarro: boolean
}

const pedro: PossuiCarro = {
    nome: "Pedro",
    salario: 3000,
    area: "enfermeiro(a)",
    possuiCarro: true
}

console.log(pedro.area);

