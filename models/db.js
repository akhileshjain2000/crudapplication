const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://akhilesh_jain:jain2000@cluster0.qoy1o.mongodb.net/crud?retryWrites=true&w=majority',{useNewUrlParser:true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  require('./employee.model');