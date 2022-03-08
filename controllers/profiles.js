import { Profile } from "../models/profile.js";
import { Item } from "../models/item.js";

function index(req, res){
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: "User Profiles"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
      Profile.findById(req.user.profile._id)
      .then(self => {
        const isSelf = self._id.equals(profile._id)
        res.render("profiles/show", {
          title: `${profile.name}'s profile`,
          profile,
          isSelf
        })
      })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function newItem(req, res){
  Profile.findById(req.params.id)
  .then(profile => {
      Profile.findById(req.user.profile._id)
      .then(self => {
        const isSelf = self._id.equals(profile._id)
        res.render("profiles/new", {
          title: `Add New Item`,
          profile,
          isSelf
        })
      })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req, res){
  //Create ItemName instance
  //Create Item instance
  //Add Item instance to ItemName
  //Add ItemName to Profile
  // Item.create({
  //   condition: req.body.condition,
  //   requested: false,
  //   available: false,
  //   borrowed: Date.now(),
  //   due: Date.now(),
  //   owner: req.user.profile._id
  // })
  // .then(item => {
  //   Profile.findById(req.user.profile._id)
  //   .then(profile => {
  //     console.log(item._id, profile.ownedItems.some(itmRef => {
  //       return itmRef === item._id
  //     }))
  //   })
    
  //   // ItemName.create({
  //   //   name: req.body.name,
  //   //   item: item._id
  //   // })
  //   // .then(itemName => {
  //   //   console.log(itemName.item)
  //   // })
  // })
}

export {
  index,
  show,
  newItem as new,
  create
}