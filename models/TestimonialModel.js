import mongoose from "mongoose";

const TestimonialSchema = mongoose.Schema({
  Fullname: { type: String },
  work: { type: String },
  email: { type: String },
  telegram: { type: String },
  discription: { type: String },
  picture: { type: Object },
});

const TESTIMONIALMODEL = mongoose.model("TESTIMONIAL", TestimonialSchema);
export default TESTIMONIALMODEL;
