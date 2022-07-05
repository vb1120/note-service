import { Request, Response, NextFunction } from 'express'

// Async wrapper for route handlers
export const asyncWrapp = (
    callback: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
    return (req: Request, res: Response, next: NextFunction) => {
        callback(req, res, next).catch(next)
    }
}
