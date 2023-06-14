import { Request, Response } from "express";
import { User } from '../model/UserModel'


export const register = async(req:Request, res: Response)=>{
    if(req.body.email && req.body.password){
        let { email, password } = req.body

        let hasUser = await User.findOne({where:{email}})

        if(!hasUser){
            let newUser = await User.create({email, password})

           

            res.json({id: newUser. id})
            return
        }else{
            res.json({error: 'E-mail já existe'})
        }

    }else{
        res.json({error: 'E-mail e/ ou senha não enviados'})
    }
}

export const login = async(req: Request, res: Response)=>{
    if(req.body.email && req.body.password){
        let email: string = req.body.email
        let password: string = req.body.password

        let user = await User.findOne({
            where: {email, password
            }
        })

        if(user){

            

            res.json({status: true})
        }else{
            res.json({error: 'falha na autorização'})
        }
    }
}


