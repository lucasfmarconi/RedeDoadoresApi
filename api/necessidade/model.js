module.exports = function (id, descricao, nome, tipo_sanguineo, unidade, municipio, estado) {
    return {
        _id: id,
        nome: nome,
        tipo_sanguineo: tipo_sanguineo,
        descricao: descricao,
        unidade: unidade,
        municipio: municipio,
        estado: estado
    };
}