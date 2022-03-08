import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  ownedItems: [{
    type: Schema.Types.ObjectId,
    ref: "ItemName"
  }],
  borrowedItems: [{
    type: Schema.Types.ObjectId,
    ref: "ItemName"
  }]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
