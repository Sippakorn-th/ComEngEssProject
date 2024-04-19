// TODO4: you may need to import something here
import Member from "../models/memberModel.js";
// export const createMember = async (req, res) => {
//   // TODO4: implement this function
//   res.status(501).send("Unimplemented");
// };

export const createMember = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    console.log(newMember)
    await newMember.save();

    res.status(200).json({ message: "OK" });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
};

export const getMembers = async (req, res) => {
  // TODO4: implement this function
  res.status(501).send("Unimplemented");
};

export const deleteMember = async (req, res) => {
  // TODO4: implement this function
  res.status(501).send("Unimplemented");
};