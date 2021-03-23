const express = require('express');
const router = express.Router();
const app = express();




let users = [
    {
      id: 1,
      name: 'alice'
    },
    {
      id: 2,
      name: 'bek'
    },
    {
      id: 3,
      name: 'chris'
    }
  ]
  
  router.get('/users', (req, res) => {
     console.log('who get in here/users');
     res.json(users)
  });
  
  router.post('/post', (req, res) => {
     console.log('who get in here post /users');
     var inputData;
  
     req.on('data', (data) => {
       inputData = JSON.parse(data);
     });
  
     req.on('end', () => {
       console.log("user_id : "+inputData.user_id + " , name : "+inputData.name);
     });
  
     res.write("OK!");
     res.end();
  });
  
  
  


module.exports = router;