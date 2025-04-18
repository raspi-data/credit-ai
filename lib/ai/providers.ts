// lib/ai/providers.js
import OpenAI from "openai";

export const myProvider = {
  languageModel: (modelName) => {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    // În funcție de modelName, poți alege gpt-3.5-turbo sau gpt-4
    return { 
      createChatCompletion: (opts) => 
        client.chat.completions.create({ model: modelName, ...opts })
    };
  },
};
