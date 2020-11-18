
const dbUtils = require('../db/dbController');

const getUserPropertyTypes = async (req, res) => { 
    let propertytypeRes = await dbUtils.getAllPropertyTypes();
    console.log("propertytypeRes ->", propertytypeRes);
    if(propertytypeRes === undefined || propertytypeRes < 1) {
        return res.send({ 'status': 404, 'statusMsg': 'Error'});
    }
    return res.send({ 'status': 200, 'propertytypeRes': propertytypeRes});
}

const getParticularPropertyTypes = async (req, res) => { 
    const { propertytype_id } = req.body;
    let propertytypeRes = await dbUtils.getParticularPropertyTypes(propertytype_id);
    console.log("propertytypeRes ->", propertytypeRes);
    if(propertytypeRes === undefined || propertytypeRes < 1) {
        return res.send({ 'status': 404, 'statusMsg': 'Error'});
    }
    return res.send({ 'status': 200, 'propertytypeRes': propertytypeRes});
}

const getPakringTypes = async (req, res) => { 
    let propertytypeRes = await dbUtils.getAllPakringTypes();
    console.log("propertytypeRes ->", propertytypeRes);
    if(propertytypeRes === undefined || propertytypeRes < 1) {
        return res.send({ 'status': 404, 'statusMsg': 'Error'});
    }
    return res.send({ 'status': 200, 'propertytypeRes': propertytypeRes});
}

const getParticularPakringType = async (req, res) => { 
    const { pakringType_id } = req.body;
    let propertytypeRes = await dbUtils.getParticularPakringType(pakringType_id);
    console.log("propertytypeRes ->", propertytypeRes);
    if(propertytypeRes === undefined || propertytypeRes < 1) {
        return res.send({ 'status': 404, 'statusMsg': 'Error'});
    }
    return res.send({ 'status': 200, 'propertytypeRes': propertytypeRes});
}
module.exports = { 
    getUserPropertyTypes,
    getParticularPropertyTypes,
    getPakringTypes,
    getParticularPakringType
 };