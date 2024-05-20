import express, { json, Request, Response, NextFunction } from 'express'
import "express-async-errors"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
app.use(json())

app.get('/feed', async (req, res) => {
    const posts = await prisma.post.findMany({
        where: { published: true },
        include: { author: true },
    })
    res.json(posts)
})

app.get('/posts', async (req, res) => {
    const posts = await prisma.post.findMany({
        include: { author: true },
    })
    res.json(posts)
})

app.post('/post', async (req, res) => {
    const { title, content, authorEmail } = req.body
    const post = await prisma.post.create({
        data: {
            title,
            content,
            published: false,
            author: { connect: { email: authorEmail } },
        },
    })
    res.json(post)
})

app.put('/publish/:id', async (req, res) => {
    const { id } = req.params
    const postId = parseInt(id, 10) // Convert id to a number
    const post = await prisma.post.update({
        where: { id: postId }, // Use the converted postId
        data: { published: true },
    })
    res.json(post)
})

app.delete('/user/:id', async (req, res) => {
    const { id } = req.params
    const userId = parseInt(id, 10) // Convert id to a number
    const user = await prisma.user.delete({
        where: {
            id: userId, // Use the converted userId
        },
    })
    res.json(user)
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

const server = app.listen(3000)