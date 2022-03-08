import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const itemNameSchema = new mongoose.Schema({
  name: String,
  Items: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }]
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  ownedItems: [{
    type: Schema.Types.ObjectId,
    ref: "ItemName"
  }],
  borrowedItems: [itemNameSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
