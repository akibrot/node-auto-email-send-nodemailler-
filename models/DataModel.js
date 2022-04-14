import mongoose from "mongoose";

const DATAMODELSHEMA = mongoose.Schema({
  picture: { type: Object },
  title: { type: String },
  discription: { type: String },
});

const DATAMODEL = mongoose.model("DATAS", DATAMODELSHEMA);
export default DATAMODEL;
