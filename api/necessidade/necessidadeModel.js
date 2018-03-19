function Necessidade(id, descricao, nome, tipo_sanguineo, hospital) {
    return {
        id: id,
        descricao: descricao,
        nome: nome,
        tipo_sanguineo: tipo_sanguineo,
        hospital: hospital
    };
}

module.exports.Necessidade = Necessidade;