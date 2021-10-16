const controller ={};

controller.list = (req, res)=> {
    res.getConnection((err, conn)=>{
        conn.query('SELECT * FROM Antonela_Reposteria',(err, Ventas) =>{
        if(err){
            res.json(err);
        }
       res.render('Ventas', {
        data: Ventas
     });
    });
 });


};
controller.save = (req, res) => {
    const data = req.body;

req.getConnection(err, conn)=>{
    conn.query('INSERT INTO Antonela_Reposteria set ?', [data], (err, Ventas)=>{
        console.log(Ventas);
        res.redirect('/');
    });
 });

};
controller.edit = (req,res) =>{
 const{id} = req.params;
 req.getConnection((err,conn)=>{
  conn.query()
 });
};
controller.delete = (req,res) =>{
const {id} = req.params.id;
    req.getConnection(err,conn) =>{
      conn.query('DELETE FROM Antonela_Reposteria WHERE id= ?',[id](err, rows)=>{
    res.redirect('/');
        
    });
}) 
};
