import db from '../config/db.js'


export const Login = async(req,res)=>{
    const{email,password} = req.body;

    if(!email||!password){
        return res.status(202).json({message:"all field are not available"})
    }

    try{
       const [response] = await db.query("select * from users where email = ? and password = ?",[email,password]);

       if(response.length>0){
        return res.status(200).json({message:"login successfuly",user:response[0]})
       }

       return res.status(202).json({message:"no user is available"})
    }catch(error){
       return res.status(500).json({message:"there is server problem"})
    }
}


export const Register = async(req,res)=>{
    const{name,email,password} = req.body;
    
    if(!email||!password||!name){
        return res.status(202).json({message:"all field are not available"})
    }
  
    try{
       const [response] = await db.query("select * from users where email = ?",[email]);
       if(response.length>0){
        return res.status(200).json({mess:"this user is already available"})
       }
       await db.query("insert into users(name,email,password)values(?,?,?)",[name,email,password]);
        return res.status(200).json({message:"register successfuly"});

    }catch(error){
        return res.status(500).json({message:"server problem"});

    }

}


export const Product = async(req,res)=>{
 try{
   const [response] = await db.query("select * from products");
   if(response.length ===0){
        return res.status(201).json({mess:"no data is avaiable"})
   }
   return res.status(200).json({data:response});

 }catch(error){
    return res.status(500).json({message:"database problem"})
 }

}
