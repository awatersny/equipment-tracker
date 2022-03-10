import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
})

const requestSchema = new Schema({
  description: String,
  borrowDate: {
    type: Date,
    default: Date.now(),
    required: true
  },
  returnDate: {
    type: Date,
    default: Date.now(),
    required: true
  },
  borrower: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  },
  approved: {
    type: Boolean,
    default: false
  }
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
  requests: [requestSchema],
  reviews: [reviewSchema]
})

const Item = mongoose.model('Item', itemSchema)

export {
  Item
}