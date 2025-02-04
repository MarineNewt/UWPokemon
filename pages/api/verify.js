const bcrypt = require('bcrypt');
const saltRounds = 10;

export default async function handler(req, res){
  const { password } = req.body;

  const result = await bcrypt.compare(password, "Temporary");
  if(result){
    return res.status(200).json({ message: 'Password Verified' });
  }else{
    return res.status(401).json({ message: 'Incorrect Password' });
  }

}