import Datastore from "react-native-local-mongodb";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MockStorage from "./LocalMockStorage";
/**
 * Connect to a local mongodb storage
 * @param {String} dbname - the db filename to store/save
 * @returns a local mongodb database object 
 */
export default function dbConnect(dbname){
    if(dbname!=='test'){
        const db = new Datastore({filename:`./${dbname}.db`, storage:AsyncStorage, autoload:true, inMemoryOnly:false});
        return db;
    }
    else{ //Test DB
        const mockstore = new MockStorage();
        const db = new Datastore({filename:`./test.db`, storage:mockstore, autoload:true, inMemoryOnly:true});
        return db;
    }
}

