// Starter Code

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err.message));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async function (next) {
//   console.log(" Pre Middleware ");
// });
customerSchema.post("findOneAndDelete", async function (customer) {
  if (customer.orders.length){
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});


const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// Function to add a new customer
const addCustomer = async (name) => {
  let newCustomer = new Customer({
    name: "Karan Arjun",
  });

  let newOrder = new Order({
    item: "Burger",
    price: 250,
  });

  newCustomer.orders.push(newOrder);

  await newOrder.save();
  await newCustomer.save();

  console.log("New Customer added successfully");
};

const delCustomer = async (name) => {
  let data = await Customer.findByIdAndDelete("6602920eaa1651f42e977fc6");
  console.log(data);
};

// addCustomer();

delCustomer();
