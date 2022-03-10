import { Profile } from "../models/profile.js";
import { Item } from "../models/item.js";

function show(req, res){
  Profile.findById(req.user.profile._id)
  .then(self => {
    console.log(self.ownedItems)
    Item.findById(req.params.id)
    .then(item => {
      res.render("items/show", {
        title: item.name,
        item: item,
      })
    })
  })
}

function deleteItem(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.ownedItems.remove({_id: req.params.id})
    profile.save()
    Item.findByIdAndDelete(req.params.id)
    .then(item => {
      res.redirect(`/profiles/${req.user.profile._id}/items`)
    })
  })
}

function edit(req, res) {
  console.log(req.params.id)
}

export {
  show,
  deleteItem as delete,
  edit
}