
const dbUtils = require('../db/dbController');


const getAllFlatDetails = async (req, res) => { 
    let flatDetailsRes = await dbUtils.getAllFlatDetails();
    console.log("flatDetailsRes ->", flatDetailsRes);
    if(flatDetailsRes === undefined || flatDetailsRes < 1) {
        return res.send({ 'status': 404, 'statusMsg': 'Error'});
    }
    return res.send({ 'status': 200, 'userTypes': flatDetailsRes});
}

const getParticularFlatDetails = async (req, res) => { 
    const { flat_id } = req.body;
    let flatDetailsRes = await dbUtils.getParticularFlatDetails(flat_id);
    console.log("flatDetailsRes ->", flatDetailsRes);
    if(flatDetailsRes === undefined || flatDetailsRes < 1) {
        return res.send({ 'status': 404, 'statusMsg': 'Error'});
    }
    return res.send({ 'status': 200, 'userTypes': flatDetailsRes});
}


const getFlatDetailsBasedOnUser = async (req, res) => { 
    const { user_id } = req.body;
    let flatDetailsBasedOnUserRes = await dbUtils.getFlatDetailsBasedOnUser(user_id);
    console.log("flatDetailsRes ->", flatDetailsBasedOnUserRes);
    if(flatDetailsBasedOnUserRes === undefined ) {
        return res.send({ 'status': 404, 'statusMsg': 'Error'});
    }
    if(flatDetailsBasedOnUserRes.length <= 0 ) {
        return res.send({ 'status': 404, 'statusMsg': 'No Data Found'});
    }
    return res.send({ 'status': 200, 'userTypes': flatDetailsBasedOnUserRes});
}

const SearchProject = async (req, res) => { 
    const { area, roomType, propertyType, pincode } = req.body;
    let flatDetailsBasedOnUserRes = await dbUtils.getFlatDetailsBasedOnUser(area, roomType, propertyType, pincode);
    console.log("flatDetailsRes ->", flatDetailsBasedOnUserRes);
    if(flatDetailsBasedOnUserRes === undefined ) {
        return res.send({ 'status': 404, 'statusMsg': 'Error'});
    }
    if(flatDetailsBasedOnUserRes.length <= 0 ) {
        return res.send({ 'status': 404, 'statusMsg': 'No Data Found'});
    }
    return res.send({ 'status': 200, 'userTypes': flatDetailsBasedOnUserRes});
}
module.exports = { 
    getAllFlatDetails,
    getParticularFlatDetails,
    getFlatDetailsBasedOnUser,
    SearchProject
 };