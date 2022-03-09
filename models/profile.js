import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  ownedItems: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }],
  borrowedItems: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
