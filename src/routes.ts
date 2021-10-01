import Router from "express"
import { VersionController } from "./Controllers/VersionController"

const router = Router()
const versionController = new VersionController()

router.get("/", versionController.get_version)

export {router}