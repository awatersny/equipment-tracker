import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  inventory: [{
    type: Schema.Types.ObjectId,
    ref: "Inventory"
  }]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
