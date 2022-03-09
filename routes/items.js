import { Router } from 'express'
import * as itemsCtrl from '../controllers/items.js'
import { isLoggedIn } from '../middleware/middleware.js';

const router = Router();

router.get('/:id', isLoggedIn, itemsCtrl.show)
router.get('/:id/edit', isLoggedIn, itemsCtrl.edit)

router.delete('/:id', isLoggedIn, itemsCtrl.delete)

export {
  router
}