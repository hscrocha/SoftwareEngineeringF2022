import bcrypt from 'bcrypt';

export default class PasswordUtil{
    /**
     * This function hashes a string password
     * @param {String} strPsw - a plain text password 
     * @returns Hashed Password
     */
    static hash(strPsw){
        return bcrypt.hashSync(strPsw,8);
    }

    /**
     * Use this function to compare if a plain text password
     * is the same of a hashed one. 
     * DO NOT compared the strings manually, it will not work.
     *
     * @param {String} strPsw - plain text password
     * @param {Hashed String} hashedPsw - hashed password
     * @returns true if the passwords are the same, false otherwise
     */
    static compare(strPsw, hashedPsw){
        return bcrypt.compareSync(strPsw,hashedPsw);
    }
}
