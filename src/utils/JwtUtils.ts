import jwt from 'jsonwebtoken'
import { envs } from './envs'

export interface IJwtPayload {
    uuid: string
    email: string
}

export class JwtUtils {
    private static accessSecret = envs.jwtAccess
    private static refreshSecret = envs.jwtRefresh

    static verifyAccessToken(accessToken: string) {
        return jwt.verify(accessToken, this.accessSecret) as IJwtPayload
    }

    static verifyRefreshToken(refreshToken: string) {
        return jwt.verify(refreshToken, this.refreshSecret) as IJwtPayload
    }
}
