import LISTMODEL from "../models/CreateLIST.js";
import DATAMODEL from "../models/DataModel.js";
import TESTIMONIALMODEL from "../models/TestimonialModel.js";
export const welcome = (req, res) => {
  res.send("Server Started");
};
// createList
export const createlist = async (req, res) => {
  const name = req.body.LISTNAME;
  let numb = 0;
  if (name) {
    numb++;
  }
  const save = await new LISTMODEL({ title: name });
  const saved = await save.save();
  if (saved) {
    res.send("saved");
  }
};
//getalllist

export const getalllist = async (req, res) => {
  const alllist = await LISTMODEL.find();
  res.send(alllist);
};

export const listdeletehandler = async (req, res) => {
  const id = req.body.id;
  await LISTMODEL.findByIdAndDelete(id);
  res.send("deleted");
};

//create data

export const createdata = async (req, res) => {
  console.log(req.body.senddata);
  const savedata = await DATAMODEL(req.body.senddata);
  res.send("saved");
  await savedata.save();
};

//getalldata
export const getalldata = async (req, res) => {
  const alldata = await DATAMODEL.find();
  res.send(alldata);
};

export const createtestimonial = async (req, res) => {
  const testimonialdata = req.body.senddata;
  const savedata = await TESTIMONIALMODEL(testimonialdata);
  await savedata.save();
  res.send("saved");
};

export const getalltestimonials = async (req, res) => {
  const alldata = await TESTIMONIALMODEL.find();
  res.send(alldata);
};