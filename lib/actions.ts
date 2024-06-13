"use server";
import { GoogleGenerativeAI } from "@google/generative-ai"
import { revalidatePath } from "next/cache";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY as string)
const googleSheetAPIURL = "https://sheetdb.io/api/v1/b7tslqs6bhxe4"

export async function generatePost(prompt: string) {

  const p = `Create an engagin social media post about ${prompt}. ** no tags ** in paragraph`
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
  const result = await model.generateContent(p);
  const response = await result.response;
  const text = response.text();

  try {

    const r = await fetch(googleSheetAPIURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [
          {
            'id': "INCREMENT",
            'prompt': prompt,
            'post': text,
            'timestamp': 'DATETIME'
          }
        ]
      })
    })
    const responseData = await r.json();
    revalidatePath('/')
    console.log(responseData)
  } catch (e) {
    console.log(e)
  }
}
