var db = require("../../db/postgres/index");

async function get() {
    return await db.clientSelect(`SELECT 
                                    id,
                                    descricao,
                                    nome,
                                    tipo_sanguineo,                                    
                                    hospital 
                                    FROM 
                                    public.rdapi_necessidade`);
}

module.exports = {
    get: get
} 
