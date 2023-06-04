const axios = require("axios");
const { Types } = require("../db");

//TRAER LOS TYPES DE LA API
const getTypes = async () => {
  const rawTypes = (await axios.get(`https://pokeapi.co/api/v2/type?&offset=0`))
    .data.results;

  const apiTypes = rawTypes.map((type) => type.name);
  //GUARDAR LOS TYPES EL BDD

  apiTypes.forEach((type) => {
    Types.findOrCreate({
      where: {
        name: type,
      },
    });
  });

  //RETORNA TYPES DESDE BDD
  const dbTypes = await Types.findAll();
  return dbTypes
};



module.exports = { getTypes };
