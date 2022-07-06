import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { envs } from '../utils'
export interface IJwtPayload {
    uuid: string
    email: string
}

export const authHandler = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization

        if (authHeader) {
            const token = authHeader.split(' ')[1]

            try {
                const jwtPayload = jwt.verify(
                    token,
                    envs.jwtAccess
                ) as IJwtPayload

                req.payload = jwtPayload

                next()
            } catch (error) {
                return res.status(401).send({ msg: 'Invalid token' })
            }
        } else {
            return res
                .status(401)
                .send({ msg: 'Authorization header not found' })
        }
    }
}
