import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma/index.js";
import { mainRouter } from "./router/index.routes.ts";
import { logger } from "hono/logger";
import { cors } from "hono/cors";

const app = new Hono();
export const db = new PrismaClient();

app.use(logger());
app.use('*', async (c, next) => {
    // Set CORS headers manually for the response
    c.res.headers.set('Access-Control-Allow-Origin', 'http://localhost:5174')
    c.res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH')
    c.res.headers.set('Access-Control-Allow-Headers', 'Content-Type')

    // If the request method is OPTIONS, respond with 200 (preflight request)
    if (c.req.method === 'OPTIONS') {
        return c.json({}, 200)
    }

    return next()
})

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

db.$connect()
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error ) => {
        console.error("Error connecting to the database:", error);
    });



serve(
  {
    fetch: app.fetch,
    port: 8000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);

app.route("", mainRouter);