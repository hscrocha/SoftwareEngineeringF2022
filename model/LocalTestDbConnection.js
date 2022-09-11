import Datastore from "react-native-local-mongodb";
import MockStorage from "./LocalMockStorage";

export default function dbConnect(){
    const mockstore = new MockStorage();
    const db = new Datastore({filename:`./test.db`, storage:mockstore, autoload:true, inMemoryOnly:true});
    return db;
}