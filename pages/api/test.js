import dbConnect from "../../utils/dbConnect";
import TodoDataModel from "../../models/TodoDataModel";

dbConnect();
export default async (req, res) => {
  // res.json({ test: "test" });

  //localhost:3000/api/test
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const dataModels = await TodoDataModel.find({});
        res.status(200).json({ success: true, data: dataModels });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const dataModels = await TodoDataModel.create(req.body);
        console.log(dataModels);
        res.status(201).json({ success: true, data: dataModels });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
