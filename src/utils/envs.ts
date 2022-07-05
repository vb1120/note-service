import 'dotenv/config'

interface Env {
    nodeEnv: string
    port: number
    postgresUri: string
    jwtAccess: string
    jwtRefresh: string
}

export const envs: Env = {
    nodeEnv: <string>process.env.NODE_ENV,
    port: parseInt(<string>process.env.PORT),
    postgresUri: <string>process.env.POSTGRES_URI,
    jwtAccess: <string>process.env.JWT_ACCESS,
    jwtRefresh: <string>process.env.JWT_REFRESH
}
