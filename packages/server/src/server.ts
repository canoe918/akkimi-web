import express, { Request, Response } from 'express';
import http from 'http';

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('hello world')
})

const server = http.createServer(app)
server.listen(4000)
