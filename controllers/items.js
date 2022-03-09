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
  console.log(req.params.id)
}

function edit(req, res) {
  console.log(1)
}

export {
  show,
  deleteItem as delete,
  edit
}