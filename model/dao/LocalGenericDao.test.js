import GenericDao from "./LocalGenericDao";
import dbConnect from "../LocalTestDbConnection";

const genTestData=[
    {name:'Test Data 1', status:1, other:'Ok'},
    {name:'2nd Test Data', status:0, other:'Not Ok'},
    {name:'Third Dt', status:1, other:'Maybe?'},
 ];
let dao = null;

beforeAll(function(){
    //Executed once before all tests
    // Not necessary here
});
beforeEach(function(){
    const db = dbConnect(); //creates a new db before each test
    dao = new GenericDao(db); //sets the db for the Generic DAO
});
test('Create/Insert',async function(){    
    const created = await dao.create(genTestData[0]);
    expect(created._id).toBeDefined();
    expect(created.name).toBe(genTestData[0].name);
});
test('Read By Id',async function(){
    const created = await dao.create(genTestData[1]);
    const found = await dao.readById(created._id);
    expect(found.name).toBe(created.name);    
});
test('Read All',async function(){
    let created = null;
    for(let i=0; i<genTestData.length; i++){
        created = await dao.create(genTestData[i]); 
        //It will override created, holding just the last one
        //I just need 1 to test later.   
    }
    const all = await dao.readAll();
    //console.log(all);
    expect(all).toContainEqual(created); //The matcher toContainEqual verifies is an array contains the object
});
test('Delete Id',async function(){
    const created = await dao.create(genTestData[2]);
    const numDeleted = await dao.deleteById(created._id);
    const found = await dao.readById(created._id);
    expect(numDeleted).toBe(1);
    expect(found).toBeNull();
});
test('Delete Id which does not exist',async function(){
    const numDeleted = await dao.deleteById('Non Existing Id');
    expect(numDeleted).toBe(0);
});
test('Delete Many',async function(){
    for(let i=0; i<genTestData.length; i++){
        await dao.create(genTestData[i]); 
    }
    const numDeleted = await dao.deleteMany({status: 1});
    expect(numDeleted).toBe(2);
});

