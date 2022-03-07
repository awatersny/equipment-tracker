import { Profile } from "../models/profile.js";
import { Inventory } from "../models/inventory.js"
import { Item } from "../models/item.js"

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
  req.body.requested = false;
  req.body.available = false;
  req.body.borrowed = 
  console.log(req.body)
}

export {
  index,
  show,
  newItem as new,
  create
}