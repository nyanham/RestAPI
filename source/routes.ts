import Router from "express"
import { VersionController } from "./Controllers/VersionController"

const router = Router()
const versionController = new VersionController()

router.get("/version", versionController.get_version)

export {router}