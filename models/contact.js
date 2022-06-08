const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  image: {
    data: Buffer,
    contentType: String,
    required: [true, 'First name is required'],
  },

});

// Create model for todo
const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;