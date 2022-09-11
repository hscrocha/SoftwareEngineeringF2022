import dbConnect from "./LocalDbConnection"

export default function dbConnect(options){
    //changing the default method and import will
    //change the way our app will communicate with the DB
    // As long as we keep the same method signatures in the DAO
    // We can more easily switch DBs
    return dbConnect(options); 
}