class VersionController{
    async get_version(request: Request, response: Response){
        return response.json()
    }
}

export {VersionController}