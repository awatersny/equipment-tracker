import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  name: String,
  condition: {
    type: String,
    enum: ["Good", "Ok", "Poor"]
  },
  requested: Boolean,
  available: Boolean,
  borrowed: {type: Date},
  due: {type: Date},
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }
})

const Item = mongoose.model('Item', itemSchema)

export {
  Item
}