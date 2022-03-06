import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const inventorySchema = new mongoose.Schema({
  name: String,
  ownedItems: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }],
  borrowedItems: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }]
})

const Inventory = mongoose.model('Inventory', inventorySchema)

export {
  Inventory
}