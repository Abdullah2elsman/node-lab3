import { UserModel } from "../../Database/Models/User.model.js";

const getUsers = async (req, res) => {
    let users = await UserModel.find();
    res.json({ message: "success", data: users })
}

const createUser = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        let newUser = await UserModel.insertMany(req.body)
        console.log("Created user:", newUser);
        res.json({ message: "user added successfully", data: newUser })
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Error creating user", error: error.message })
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id
    let userUpdated = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
    res.json({ message: "user updated successfully", data: userUpdated })
}
const deleteUser = async (req, res) => {
    let user = await UserModel.findByIdAndDelete({ _id: req.params.id })
    res.json({ message: "user deleted successfully", data: user })
}

export { getUsers, createUser, updateUser, deleteUser }