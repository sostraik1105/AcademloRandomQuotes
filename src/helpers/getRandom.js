import quotes from '../quotes.json';

export const getRandomQuote = ()=> Math.floor(Math.random() * quotes.length)

export const getRandomColor = () => (Math.random() * 0xffffff * 1000000).toString(16);