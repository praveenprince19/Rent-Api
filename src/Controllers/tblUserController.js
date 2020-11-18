
const dbUtils = require('../db/dbController');


const getUserTypes = async (req, res) => { 
    let usertypeRes = await dbUtils.getAllUserTypes();
    console.log("usertypeRes ->", usertypeRes);
    if(usertypeRes === undefined || usertypeRes < 1) {
        return res.send({ 'status': 404, 'statusMsg': 'Error'});
    }
    return res.send({ 'status': 200, 'userTypes': usertypeRes});
}

const getAllUser = async (req, res) => { 
    let usersRes = await dbUtils.getAllUsers();
    console.log("usertypeRes ->", usersRes);
    if(usersRes === undefined || usersRes < 1) {
        return res.send({ 'status': 404, 'statusMsg': 'Error'});
    }
    return res.send({ 'status': 200, 'usersRes': usersRes});
}

const getParticularUserList = async (req, res) => { 
    const { user_id } = req.body;
    let usersRes = await dbUtils.getParticularUsers(user_id);
    console.log("usertypeRes ->", usersRes);
    if(usersRes === undefined || usersRes < 1) {
        return res.send({ 'status': 404, 'statusMsg': 'Error'});
    }
    return res.send({ 'status': 200, 'usersRes': usersRes});
}
module.exports = { 
    getUserTypes,
    getAllUser,
    getParticularUserList
 };