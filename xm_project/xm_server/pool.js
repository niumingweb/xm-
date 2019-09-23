//引入mysql
const mysql=require('mysql');
 
//创建连接池
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'xm',
  connectionLimit:20,
  multipleStatements: true
});
//导出连接池
module.exports=pool;