const { Configuration, OpenAIApi } = require("openai");

require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log(process.env.OPENAI_API_KEY);

const openai = new OpenAIApi(configuration);

async function runCompletion(input) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: input
  }).then((response)=>{
    return resolve({status:200,message:response.data.choices[0].text});
  });
  console.log(completion.data.choices[0].text);
}


module.exports.runCompletion = runCompletion;