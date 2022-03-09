import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
})

const itemSchema = new mongoose.Schema({
  name: String,
  condition: {
    type: String,
    enum: ["Good", "Ok", "Poor"]
  },
  requested: {
    type: Boolean,
    default: false
  },
  available:{
    type: Boolean,
    default: true
  },
  borrowed: {
    type: Date,
    default: Date.now()
  },
  due: {
    type: Date,
    default: Date.now()
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  },
  reviews: [reviewSchema]
})

const Item = mongoose.model('Item', itemSchema)

export {
  Item
}