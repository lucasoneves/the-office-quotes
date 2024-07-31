// src/app/quoteActions.ts

"use server"; // Definido no início para usar Server Actions

import cmsService from "@/infra/cms/cmsService";

export async function getRandomQuote() {
  const contentQuery = `{
    allQuotes(first: 100) {
      content
      author {
        title
        avatar {
          url
        }
      }
    }
  }`;

  try {
    const QUOTE_INDEX = Math.floor(Math.random() * 100);

    // Busca os dados do CMS
    const { data } = await cmsService({
      query: contentQuery,
    });

    // Seleciona a citação aleatória
    const newQuote = data.pageContent.data.allQuotes[QUOTE_INDEX];

    return newQuote;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch quote");
  }
}


export default getRandomQuote;