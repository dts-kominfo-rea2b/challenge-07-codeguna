const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (statement) =>{
  try {
    const [resIXX, resVGC] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()]);
    const result = [...resIXX, ...resVGC];

    return result?.filter(item => item.hasil === statement)?.length || 0
  }
  catch (error){
    console.log("there was an error: " + error);
  }
}

module.exports = {
  promiseOutput,
};
