import { defineConfig } from "@playwright/test";

const port = Number(process.env.PLAYWRIGHT_PORT ?? 3100);
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? `http://localhost:${port}`;

export default defineConfig({
  testDir: "e2e",
  timeout: 90_000,
  workers: 2,
  use: {
    baseURL,
    channel: "chrome",
    viewport: { width: 1440, height: 900 },
  },
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : { command: `npx next start -p ${port}`, url: baseURL, reuseExistingServer: !process.env.CI },
});
