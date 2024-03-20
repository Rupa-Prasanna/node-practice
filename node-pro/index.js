const express=require("express");
const path=require("path");
const {open}=require("sqlite");
const sqlite3=require("sqlite3").verbose();
const app=express();

let db=null;
const dbPath=path.join(__dirname, "userdetails.db");
app.use(express.json());

const initializeDbAndServer=async()=>{
    try{
        db=await open({
            filename:dbPath,
            driver:sqlite3.Database,
        });
        app.listen(3000,()=>{
            console.log("server is running at port 3000")
        });

    }catch(error){
        console.log(`DB Error:${error.message}`);
        process.exit(1);
    }
};


initializeDbAndServer();

