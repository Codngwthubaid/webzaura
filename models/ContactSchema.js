import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    minlength: [2, 'Full name must be at least 2 characters'],
    maxlength: [255, 'Full name cannot exceed 255 characters'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    trim: true,
    lowercase: true,
  },
  services: {
    type: String,
    required: [true, 'Service selection is required'],
    minlength: [2, 'Service name must be at least 2 characters'],
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'Plan type is required'],
    enum: {
      values: ['Basic', 'Advanced', 'Enterprise'],
      message: 'Type must be Basic, Advanced, or Enterprise',
    },
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    minlength: [5, 'Message must be at least 5 characters'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
}, {
  timestamps: true,
});


const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;