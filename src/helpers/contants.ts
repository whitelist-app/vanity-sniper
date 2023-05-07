import fetch from "node-fetch";

export const SNIPER_GUILD_ID = "Guild Id";
export const SNIPER_SELF_TOKEN = "Token1";
export const URL_SNIPER_SELF_TOKEN = 
 "Token2";
export const WEBHOOKS = {
  SUCCESS: async (content: string) => {
    await fetch(
      `Your Webhook`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content,
          username: "SUCCESS",
        }),
      }
    );
  },
  INFO: async (content: string) => {
    await fetch(
      `Your Webhook`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          username: "INFO",
        }),
      }
    );
  },

  FAIL: async (content: string) => {
    await fetch(
      `Your Webhook`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          username: "FAIL",
        }),
      }
    );
  },
};
