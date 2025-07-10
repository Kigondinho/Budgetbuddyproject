import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "budget-buddy",
  name: "Budget Buddy",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, 
    maxAttempts: 2,
  }),
});
