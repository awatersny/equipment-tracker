import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"

const router = Router();

router.get('/', profilesCtrl.index)

export {
  router
}