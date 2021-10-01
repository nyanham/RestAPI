import {Request, Response} from 'express'

class VersionController{
    async get_version(request: Request, response: Response){
        return response.json({version: "v0.1"})
    }
}

export {VersionController}