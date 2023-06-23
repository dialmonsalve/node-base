import { type Request, Response } from "express";

interface Hola {
  name: string,
  age: number
}

const getUsers = (_req: Request, res: Response) => {

  res.json({
    "msg": 'get'
  });
}

const postUsers = (req: Request, res: Response) => {

  const { name, age }: Hola = req.body;

  res.json({
    "msg": 'post',
    name,
    age
  });
}

const putUsers = (req: Request, res: Response) => {

  const { id } = req.params

  res.status(201).json({
    "msg": 'post',
    id
  });
}

const patchUsers = (_req: Request, res: Response) => {


  res.json({
    "msg": 'patch'
  });
}

const deleteUsers = (_req: Request, res: Response) => {


  res.json({
    "msg": 'delete'
  });
}


export {
  deleteUsers,
  getUsers,
  patchUsers,
  postUsers,
  putUsers,
}