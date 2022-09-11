import PasswordUtil from "../../util/PasswordUtil";
import GenericDao from "./LocalGenericDao";

export default class UserDao extends GenericDao{
    /**
     * Static method to return the standard name for 
     * the DB used in this DAO. 
     * @returns String with the DB name used for this DAO.
     */
    static dbName(){
        return 'user'; 
    }

    async insert(userdata){
        const hashedpass = PasswordUtil.hash(userdata.password);
        userdata.password = hashedpass;
        return await super.insert(userdata);
    }
    

    /**
     * Looks in the user db for the login that matches 
     * the username and then compares the password.
     * @param {String} username - login
     * @param {String} strPassword - plain text password
     * @returns user object from db if sucessfull, null otherwise
     */
    async login(username, strPassword){
        const user = await this.db.findOneAsync({login: username});  
        if(user!==null){ //We found a user with the login
            // Now we need to compare the passwords 
            // We must use the PasswordUtil to compare
            if(PasswordUtil.compare(strPassword, user.password)){
                //Passwords match
                return user; // user object will have all info on the logeed user
            }
        }
        return null; //Login was unsuccessfull 
    }
}