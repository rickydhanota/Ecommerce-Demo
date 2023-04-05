const User = require("../models/ecommerce.model");

export const getUser = async (req, res) => {
  try {
    const { id } = req.params; //comes from the route
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// module.exports.getUser => (req, res) => {
//     User.findOne({_id: req.params.id})
//     .then(oneUser => {
//         console.log(oneUser)
//         res.json(oneUser)
//     })
//     .catch(err => console.log(err))
// };
