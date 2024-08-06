const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const ids=[];
const tasks = [];
const states=[];

router.get('/', (req,res)=>{    // GET
    
    
  res.send({tasks,ids ,states});

   res.end(); });


router.post('/',(req,res)=>{   //POST
  console.log({r:req.body})
 const task=req.body.task;

//
   const id=req.body.id;
//

 const state= req.body.state;
  states.push(state);
 tasks.push(task)
 
    ids.push(id);


res.send({tasks,ids ,states});



res.end();
    }
);


router.delete('/:id',(req,res)=>{    //DELETE

  console.log('id to delete: '+  req.params.id)
 
const idToDelete=req.params.id;


 for(let i=0 ;i<tasks.length;i++){
 
if(idToDelete==ids[i]){
  item=ids[i]
  tasks.splice(i,1);
  states.splice(i,1);
   ids.splice(i,1);
 }
 //
res.end();

}


})


router.put('/:id',(req,res)=>{    //PUT
  idToEdit= req.params.id;
  console.log(idToEdit)

  for(let i=0;i<states.length;i++)
{
if(ids[i]==idToEdit){
  if(states[i]=='done') 
    states.splice(i,1,'undone');
  else
  states.splice(i,1,'done');
}

}
res.send({tasks,ids ,states});
res.end();
});

module.exports=router;


