const { Configuration, OpenAIApi } = require("openai");
const API_KEY="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";

const configuration = new Configuration({
    apiKey: API_KEY,
});

const openai = new OpenAIApi({ configuration });

export async function sendMessageToOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return res.data.choices[0].text;
}

