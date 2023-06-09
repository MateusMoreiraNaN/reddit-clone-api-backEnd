import passport from "passport"
import dotenv from 'dotenv'
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt"
import { User } from "../model/UserModel"
import { Request, Response, NextFunction } from "express"
import JWT from 'jsonwebtoken'

dotenv.config()

const notAuthrorizeeJson = { status: 401, message: 'Não autorizado'}

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY as string

}

passport.use(new JWTStrategy(options, async(payload, done)=>{
    const user = await User.findByPk(payload.id)

    if(user){
        return done(null, user)
    }else{
        return done
        (notAuthrorizeeJson, false)
    }
}))

export const generateToken = (data: object)=>{
    return JWT.sign(data, process.env.JWT_SECRET_KEY as string)
}


export const privateRoute = (req: Request, res: Response, next: NextFunction)=>{
    const authFunction = passport.authenticate('jwt', (err:any, user:string)=>{
        req.user = user
        if(user){
            next()
        }else{
            next(notAuthrorizeeJson)
        }
    })
    authFunction(req, res, next)
}

export default passport