import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"
import { isLoggedIn } from '../middleware/middleware.js';

const router = Router();

router.get('/', profilesCtrl.index)
router.get('/:id/items', isLoggedIn, profilesCtrl.show)
router.get('/:id/new', isLoggedIn, profilesCtrl.new)

router.post('/:id/items', isLoggedIn, profilesCtrl.create)

export {
  router
}