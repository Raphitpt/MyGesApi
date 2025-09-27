import { config } from "dotenv";
import { join } from "node:path";

// Load the `.env` file configuration.
config({ path: join(__dirname, ".env") });

export const credentials = {
  username: process.env.GES_USERNAME!,
  password: process.env.GES_PASSWORD!,
}