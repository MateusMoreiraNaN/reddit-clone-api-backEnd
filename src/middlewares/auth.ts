import { Request, Response, NextFunction } from "express";
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const apiAuth = {
    private: async(req: Request, res: Response, next: NextFunction)=>{

        let sucess = false
        if(req.headers.authorization){
            const [authType, token] = req.headers.authorization.split(' ')
            if(authType === 'Bearer'){
                try{
                    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY as string)

                    sucess = true
                } catch(err){
                    res.status(400)
                }
            }
        }


        if(sucess){
            next()
        }else{
            res.status(403)
            res.json({error: 'Não autorizado'})
        }
    }
}