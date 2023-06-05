const { Pokemon, Type } = require("../db");

const createPokemon = async (
  name,
  sprites,
  life,
  attack,
  defense,
  speed,
  height,
  weight,
  types,
) => {
  try {
    const obj = {
      name,
     sprites,
     life,
     attack,
     defense,
     speed,
     height,
     weight,
     }
     console.log(obj);
     const newPokemon = await Pokemon.create(obj);
        
         const dbTypes = await Type.findAll({
           where: {
             id: types
           }
         });
   
        return newPokemon.addType(dbTypes);
   
    
  } catch (error) {
    console.log(error.message);
  }
 
    


};

module.exports = createPokemon;
