// For more info on the DB operations read the doc
// https://www.npmjs.com/package/react-native-local-mongodb

export default class GenericDao {
    constructor(db){
        this.db = db; //A Local MongoDB DB object
    }

    /**
     * Static method to return the standard name for 
     * the DB used in this DAO. 
     * Not used in GenericDAO, it is for the subclasses to override.
     * @returns String with the DB name used for this DAO.
     */
    static dbName(){
        return 'test'; //Generic Dao has no standard DB
    }
    async insert(dataObj){
        return await this.db.insertAsync(dataObj);
    }
    async create(dataObj){
        return await this.insert(dataObj);
    }
    async readById(idvalue){
        return await this.db.findOneAsync({_id: idvalue});
    }
    async read(condition){
        return await this.db.findAsync(condition);
    }
    async readAll(){
        return await this.read({});
    }
    async readPaginate(condition,sk,lim,sort){
        // If you don't specify a callback to find, findOne or count, a Cursor object is returned. You can modify the cursor with sort, skip and limit and then execute it with exec(callback) - a promise is returned.
        return this.db.findAsync(condition).sort(sort).skip(sk).limit(lim);
    }
    async update(query,dataObj){
        return await this.db.updateAsync(query,dataObj);
    }
    async deleteById(idvalue){
        //returns the number of deleted rows, in this case 1 or 0
        return await this.db.removeAsync({_id: idvalue});
    }
    async deleteMany(query){
        return await this.db.removeAsync(query,{multi:true});
    }
    async deleteAll(){
        //should not be used or relied upon
        //return await this.deleteMore({});
    }

}