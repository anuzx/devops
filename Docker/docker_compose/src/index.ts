
import { PrismaClient } from "./generated/prisma/client.js"
import express from "express"

const app = express()
const Prisma = new PrismaClient()

//endpoint to get everything in the user table
app.get("/", async (req, res) => {
   const data =  await Prisma.user.findMany()
    res.json({
        data
    })
})

//endpoint to create random entries in the database
app.post("/", async (req, res) => {
    await Prisma.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });
    res.json({
        message:"post endpoint"
    })
})

app.listen(3000)