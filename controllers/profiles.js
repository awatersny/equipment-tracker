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
    res.redirect(`/profiles/${req.user.profile._id}/items`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('ownedItems')
  .then(profile => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      Item.find({_id: {$nin: profile.items}}, items => {
        res.render("profiles/show", {
          title: `${profile.name}'s profile`,
          items: profile.items,
          profile,
          isSelf: self._id.equals(profile._id)
        })
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
  const newItem = req.body
  newItem.owner = req.user.profile._id
  Item.create(newItem)
  .then(item => {
    Profile.findById(req.user.profile._id)
    .then(profile => {
      profile.ownedItems.push(item._id);
      profile.save()
      res.redirect(`/profiles/${req.user.profile._id}/items`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}/new`)
  })
}

export {
  index,
  show,
  newItem as new,
  create,
}