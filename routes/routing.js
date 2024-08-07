const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


let tasks=[];
let id=0;


router.post('/',(req,res)=>{   //POSTconst id=0;

  addTaskInfo={

  "id": ++id,
  "task": req.body.task ,
  "state":req.body.state,

  }
tasks.push(addTaskInfo);

let task = addTaskInfo['task'];
let state =  addTaskInfo['state'];

console.log(id)
console.log(task)
console.log(state)
res.end();
    }
);

router.get('/', (req,res)=>{    // GET  
  res.send(tasks);
   res.end(); 
  
  });



router.delete('/:id',(req,res)=>{    //DELETE
  const idToDelete=req.params.id;

  for(let ele in tasks){

  if(tasks[ele]['id']==idToDelete)
  {
    delete tasks[ele];
  }}
  res.end();
  });



router.put('/:id',(req,res)=>{    //PUT

  console.log('id to edit: '+  req.params.id)
     
  const idToEdit=req.params.id;

  for(let ele in tasks){
console.log(tasks[ele]['id']);
if(tasks[ele]['id']==idToEdit)
{
  if(tasks[ele]['state']=='done') {
    tasks[ele]['state']='undone';}


    else{
         tasks[ele]['state']='done';
    }
 
}
    }
    res.end();
  });
module.exports=router;


