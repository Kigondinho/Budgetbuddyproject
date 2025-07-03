import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { checkBudgetAlerts, processRecurringTransaction, triggerRecurringTransactions } from "@/lib/inngest/function";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    checkBudgetAlerts, processRecurringTransaction ,triggerRecurringTransactions
  ],
});