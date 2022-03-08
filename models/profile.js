import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const itemNameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }]
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  ownedItems: [itemNameSchema],
  borrowedItems: [itemNameSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
