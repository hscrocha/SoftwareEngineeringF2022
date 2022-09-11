import Datastore from "react-native-local-mongodb";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MockStorage from "./LocalMockStorage";
/**
 * Connect to a local mongodb storage
 * @param {String} dbname - the db filename to store/save
 * @returns a local mongodb database object 
 */
export default function dbConnect(dbname){
    const db = new Datastore({filename:`./${dbname}.db`, storage:AsyncStorage, autoload:true, inMemoryOnly:false});
    return db;
}

