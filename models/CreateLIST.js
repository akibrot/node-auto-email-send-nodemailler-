import mongoose from "mongoose";

const LISTMODELSCHEMA = mongoose.Schema({
  title: { type: String },
});

const LISTMODEL = mongoose.model("LIST", LISTMODELSCHEMA);
export default LISTMODEL;
