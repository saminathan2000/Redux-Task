const {con} = require("../config/dbconfig");
const { StatusCodes } = require('http-status-codes');

const getCart = async (req, res) => {
    const reqAuth=req.headers.authorization;
    if ((reqAuth && reqAuth.split(' ')[0] === 'Bearer')==false) {
        
        res.status(StatusCodes.NOT_FOUND).send();
    }
    
    const BearerToken = reqAuth.split(" ")[1]
    console.log(BearerToken)
    try {
        con.query('SELECT * FROM qkart.cart where token = "'+BearerToken+'"', (err,rows) => {
        if(err) throw err;
        console.log('Cart data received from Db:');
        res.send(rows)
      });
      
        
    } catch (error) { 
        res.status(StatusCodes.NOT_FOUND).send();
    }
};

const checkout = async (req, res) => {
    const reqAuth=req.headers.authorization;
    if ((reqAuth && reqAuth.split(' ')[0] === 'Bearer')==false) {
        
        res.status(StatusCodes.NOT_FOUND).send();
    }
    const addressId=req.body.addressId;
    const BearerToken = reqAuth.split(" ")[1]
    console.log(BearerToken,"bbtoken")
    try {
        var sql = `INSERT INTO qkart.checkout (addressId,token) VALUES ("`+addressId+`","`+BearerToken+`")`;
        con.query(sql, (err,result) => {
            console.log("hai hello",err,result)
            if(err) res.status(StatusCodes.NOT_FOUND).send(err);
            console.log('Data inserted');
            console.log(result)
            res.status(StatusCodes.CREATED).send(result);
          });
      
        
    } catch (error) { 
        res.status(StatusCodes.NOT_FOUND).send();
    }
};

const updateCart = async (req, res) => {
    const reqAuth=req.headers.authorization;
    const prodId=req.body.productId;
    const qty= req.body.qty;
    if ((reqAuth && reqAuth.split(' ')[0] === 'Bearer')==false) {
        res.status(StatusCodes.NOT_FOUND).send();
    }
    const BearerToken = reqAuth.split(" ")[1]
    try {
        con.query('SELECT * FROM qkart.cart where token = "'+BearerToken+'" and productId = "'+prodId+'"', (err,rows) => {
        if(err) throw err;
        console.log('Cart data received from Db:',rows);
        var sql;
        if(!rows.length){
            sql = `INSERT INTO qkart.cart (token,productId,qty) VALUES ("`+BearerToken+`","`+prodId+`","`+qty+`")`;
            console.log(rows[0],"ppp")
        }
        
        else{
            sql ="UPDATE qkart.cart set qty = "+qty+' where token = "'+BearerToken+'" and productId = '+prodId;
            if(qty==0){
                sql='DELETE from qkart.cart WHERE token = "'+BearerToken+'" and productId = '+prodId;
            }
        }
        console.log(sql)
        con.query(sql, (err,result) => {
            if(err) res.status(StatusCodes.NOT_FOUND).send(err);
            console.log('Cart Updated');
            console.log(result)
            res.status(StatusCodes.CREATED).send(result);
          });
      });
      
        
    } catch (error) { 
        res.status(StatusCodes.NOT_FOUND).send();
    }
};

module.exports={getCart,updateCart,checkout}