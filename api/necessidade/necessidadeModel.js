function Necessidade(id, descricao, nome, tipo_sanguineo, unidade, municipio, estado) {
    return {
        id: id,
        nome: nome,
        tipo_sanguineo: tipo_sanguineo,
        descricao: descricao,
        unidade: unidade,
        municipio: municipio,
        estado: estado
    };
}

module.exports.Necessidade = Necessidade;