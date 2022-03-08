import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const itemNameSchema = new mongoose.Schema({
  name: String,
  Items: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }]
})

const ItemName = mongoose.model('ItemName', itemNameSchema)

export {
  ItemName
}