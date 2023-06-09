import { Request, Response } from "express";
import { Nick } from '../model/nickModel'

export const nick = async(req: Request, res: Response)=>{
    let { nick, xp } = req.body

    let newNick = await Nick.create({
        nick, xp
    })

    res.json({id: newNick.id, nick, xp})
}

export const nicks = async(req:Request, res: Response)=>{
    let nicks = await Nick.findAll()

    res.status(200).json(nicks)
}

