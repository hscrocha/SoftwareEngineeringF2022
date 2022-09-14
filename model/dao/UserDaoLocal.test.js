import UserDao from "./UserDaoLocal";
import dbConnect from "../LocalTestDbConnection";
import UserEntity from "../entity/UserEntity";

let dao = null;
const testData = [
    {name:'Test User',login:'t@t.com',password:'1234231',permission:2},
    {name:'Another User',login:'a@t.com',password:'2345432',permission:2},
    {name:'Admin User',login:'admin@a.com',password:'3456543',permission:1},
];

beforeAll(function(){
    //Executed once before all tests
    // Not necessary here
});
beforeEach(function(){
    const db = dbConnect(); //creates a new db before each test
    dao = new UserDao(db); //sets the db for the Generic DAO
});
test('Login test',async function(){
    for(let userdata of testData){
        await dao.create({...userdata}); 
        //the syntax {...obj} makes a copy of the obj
        //I need a copy because creating a user will change the password to a hashed field
        //And I need the original test data for checks
    }
    const logged = await dao.login(testData[0].login, testData[0].password);
    expect(logged.name).toBe(testData[0].name);
    expect(logged.password).not.toBe(testData[0].password);
});
test('Create user',async function(){
    const created = await dao.create({...testData[0]});
    expect(created.login).toBe(testData[0].login);
    expect(created.password).not.toBe(testData[0].password);
});
test('Read one - Login',async function(){
    for(let data of testData){
        await dao.create({...data});
    }
    const found = await dao.readOne({login: testData[1].login});
    expect(found.login).toBe(testData[1].login);
    expect(found.name).toBe(testData[1].name);
});

