import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"
import { isLoggedIn } from '../middleware/middleware.js';

const router = Router();

router.get('/', profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.get('/:id/new', isLoggedIn, profilesCtrl.new)

router.post('/:id', isLoggedIn, profilesCtrl.create)

export {
  router
}