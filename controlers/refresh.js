const jwt=require('jsonwebtoken')

exports.refresh=(req,res)=>{
    const token = `${req.headers.authorization}`;
    const tokenDecodablePart = token.split('.')[1];
    const decoded = Buffer.from(tokenDecodablePart, 'base64').toString();
    let obj = JSON.parse(decoded);
    const accessToken=jwt.sign({ username: obj.username, email:obj.email,occupation:obj.occupation}, "mySecretKey", {
        expiresIn: "30s",
      });
    res.json({
        accessToken:accessToken
    })
}