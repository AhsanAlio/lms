const jwt=require('jsonwebtoken')
const db=require('../database')

const generateAccessToken = (user) => {
    return jwt.sign({ username: user.username, email:user.email,occupation:user.occupation}, "mySecretKey", {
      expiresIn: "300000000s",
    });
  };

  const generateRefreshToken = (user) => {
    return jwt.sign({ username: user.username, email:user.email,occupation:user.occupation}, "mySecretRefreshKey", {
      expiresIn: "30000000s",
    });
  };

  exports.tokens=async (req,res)=>{

    console.log('API has been Called for login')

    let username=req.body.username
    let password=req.body.password

    const user= await db.query('select * from user_rule where username=$1 and password=$2',[username,password]);

    if (user.rows[0]==null) {
        //Generate an access token
        res.status(400).json("Username or password incorrect!");
    } else {

        const accessToken = generateAccessToken(user.rows[0]);
        const refreshToken = generateRefreshToken(user.rows[0]);
        res.json({
        username: user.rows[0].username,
        email:user.rows[0].email,
        occupation:user.rows[0].occupation,
        accessToken:accessToken,
        refreshToken:refreshToken
      });
        
      }
}

exports.verify = (req, res, next) => {
const authHeader = req.headers.authorization;
if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "mySecretKey", (err, user) => {
    if (err) {
        return res.status(403).json("Token is not valid!");
    }

    req.user = user;
    next();
    });
} else {
    res.status(401).json("You are not authenticated!");
}
};

exports.refreshverify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
      const token = authHeader.split(" ")[1];
  
      jwt.verify(token, "mySecretRefreshKey", (err, user) => {
      if (err) {
          return res.status(403).json("Token is not valid!");
      }
  
      req.user = user;
      next();
      });
  } else {
      res.status(401).json("You are not authenticated!");
  }
  };