const Sequelize = require("sequelize");
const database = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "pandey",
    database: "movies",
});

const dbTable = sequelize.define(
    "nodeDB",// database name
    {
    id:{
    type:DataTypes.NUMBER ,
    allowNull:false,
    primaryKey:true,
    },
    name: {
    type: DataTypes.STRING,
    },
    
    },
    { createdAt: false, updatedAt: false }
    );
    
    const init = async function () {
    try {
    await sequelize.authenticate();
    await sequelize.sync({alter:true})
    // const data = await MasterKey.findAll({});
    
    // console.log("db > init > data", data);
    } catch (error) {
    // console.log("db > init > ", error);
    }
    };


module.exports{
    database,
    table,

}