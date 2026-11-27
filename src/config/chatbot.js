// export const CHATBOT_CONFIG = {
//   // Relative path to Netlify function — API key stays server-side
//   apiEndpoint: import.meta.env.VITE_CHATBOT_API_ENDPOINT || "/.netlify/functions/chat",
//   model: import.meta.env.VITE_CHATBOT_MODEL || "gpt-3.5-turbo",
//   // System prompt is now defined server-side in netlify/functions/chat.js
//   // This is kept for reference / fallback display
//   systemPrompt: "Portfolio assistant for Gurmeet Singh - context configured server-side.",
// };
export const CHATBOT_CONFIG = {
  apiEndpoint: import.meta.env.VITE_CHATBOT_API_ENDPOINT || "/.netlify/functions/chat",
  model: import.meta.env.VITE_CHATBOT_MODEL || "gpt-5.5",
  systemPrompt: "Portfolio assistant for Gurmeet Singh - context configured server-side.",
};