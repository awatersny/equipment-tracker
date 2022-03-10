import { Profile } from "../models/profile.js";
import { Item } from "../models/item.js";

function show(req, res){
  Profile.findById(req.user.profile._id)
  .then(self => {
    Item.findById(req.params.id)
    .then(item => {
      Profile.findById(item.owner)
      .then(profile => {
        const isSelf = self.id === profile.id
        res.render("items/show", {
          title: item.name,
          item: item,
          profile: profile,
          isSelf,
        })
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/items")
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

function createRequest(req, res) {
  Item.findById(req.params.id)
  .then(item => {
    const newRequest = req.body
    newRequest.borrower = req.user.profile._id
    item.requests.push(newRequest)
    item.save()
    res.redirect(`/profiles/${item.owner._id}/items/${item._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${item.owner._id}/items${item._id}`)
  })
}

function edit(req, res) {
  console.log(req.params.id)
}

export {
  show,
  deleteItem as delete,
  edit,
  createRequest
}