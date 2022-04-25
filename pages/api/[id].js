import dbConnect from "../../utils/dbConnect";
import models from "../../models/TodoDataModel";
import cors from "cors";

cors();
dbConnect();
export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;
  switch (method) {
    case "GET":
      try {
        const dataModels = await models.findById(id);
        if (!dataModels) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: dataModels });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const dataModels = await models.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!dataModels) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: dataModels });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const dataModelsDelete = await models.deleteOne({ _id: id });
        if (!dataModelsDelete) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
