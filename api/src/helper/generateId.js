const jwt = require("jsonwebtoken");


const generateId = () => {
  const userForToken = {
    username: userCreate.mail,
    id: userCreate.id,
  };
  const generatToken = jwt.sign(
    userForToken,
    SECRET,
    { expiresIn: 86400 } //---> un día // 60 * 60 * 24 * 7 ---> una semana
  );
};

export default generateId;
