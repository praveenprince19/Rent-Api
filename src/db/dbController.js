// const { Pool } = require('pg');
const { Pool, Client } = require('pg')

// var moment = require('moment');
const pool = new Pool({
    user: 'postgres',
    host: "localhost",
    database: "RentDB",
    password: "Password#1",
    port: "5432",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});
// const pool = new Pool({
//     user: process.env.postgre_user,
//     host: process.env.postgre_host,
//     database: process.env.postgre_database,
//     password: process.env.postgre_password,
//     port: process.env.postgre_port,
//     max: 20,
//     idleTimeoutMillis: 30000,
//     connectionTimeoutMillis: 2000
// });

const getAllUserTypes = async () => {
    const query = {
        text: 'select  userMaster_id,usertype from tbl_UsersMaster where is_Active = $1',
        values: [true]
    };    
    console.log("Verify query", query);
    const client = await pool.connect();
    try {
        
        const response = await client.query(query);
        console.log(" course response"+ JSON.stringify(response.rows));
        client.release();
        return response.rows;

 
    } catch (error) {
        client.release();
    }
 
}

const getAllPropertyTypes = async () => {
    const query = {
        text: 'select propertyType_id,property_Type from tbl_propertyType where is_Active = $1',
        values: [true]
    };    
    console.log("Verify query", query);
    const client = await pool.connect();
    try {
        
        const response = await client.query(query);
        console.log(" course response"+ JSON.stringify(response.rows));
        client.release();
        return response.rows;

 
    } catch (error) {
        client.release();
    }
 
}

const getParticularPropertyTypes = async (propertytype_id) => {
    const query = {
        text: 'select propertyType_id,property_Type from tbl_propertyType where propertyType_id = $1 and  is_Active = $2',
        values: [propertytype_id, true]
    };    
    console.log("Verify query", query);
    const client = await pool.connect();
    try {
        
        const response = await client.query(query);
        console.log(" course response"+ JSON.stringify(response.rows));
        client.release();
        return response.rows;

 
    } catch (error) {
        client.release();
    }
 
}

const getParticularPakringType = async (pakringType_id) => {
    const query = {
        text: 'select pakringType_id,pakringType from tbl_PakringType where pakringType_id = $1 and  is_Active = $2',
        values: [pakringType_id, true]
    };    
    console.log("Verify query", query);
    const client = await pool.connect();
    try {
        
        const response = await client.query(query);
        console.log(" course response"+ JSON.stringify(response.rows));
        client.release();
        return response.rows;

 
    } catch (error) {
        client.release();
    }
 
}

const getAllPakringTypes = async () => {
    const query = {
        text: 'select pakringType_id,pakringType from tbl_PakringType where is_Active = $1',
        values: [true]
    };    
    console.log("Verify query", query);
    const client = await pool.connect();
    try {
        
        const response = await client.query(query);
        console.log(" course response"+ JSON.stringify(response.rows));
        client.release();
        return response.rows;

 
    } catch (error) {
        client.release();
    }
 
}

const getAllUsers = async () => {
    const query = {
        text: 'select usr.user_name,usr.user_image,usr.user_image_path,usrM.usertype, usr.email_id,usr.address  from tbl_Users as usr INNER JOIN tbl_UsersMaster as usrM ON usr.usertype_id = usrM.userMaster_id where usr.is_Active = $1',
        values: [true]
    };    
    console.log("Verify query", query);
    const client = await pool.connect();
    try {
        
        const response = await client.query(query);
        console.log(" course response"+ JSON.stringify(response.rows));
        client.release();
        return response.rows;

 
    } catch (error) {
        client.release();
    }
 
}

const getParticularUsers = async (user_id) => {
    const query = {
        text: 'select usr.user_name,usr.user_image,usr.user_image_path,usrM.usertype, usr.email_id,usr.address  from tbl_Users as usr INNER JOIN tbl_UsersMaster as usrM ON usr.usertype_id = usrM.userMaster_id where usr.is_Active = $1 and usr.user_id = $2',
        values: [true, user_id]
    };    
    console.log("Verify query", query);
    const client = await pool.connect();
    try {
        
        const response = await client.query(query);
        console.log(" course response"+ JSON.stringify(response.rows));
        client.release();
        return response.rows;

 
    } catch (error) {
        client.release();
    }
 
}


const getAllFlatDetails = async () => {
    const query = {
        text: 'select fT_det.flat_tittle,fT_det.flat_description, fT_det.address,fT_det.rooms,bathrooms, fT_det.balconies,fT_det.building_Area, fT_det.facing, fT_det.flat_image_path, fT_det.flat_image, fT_det.latitude,fT_det.longitude, prty_ty.property_Type,carPk_Ty.pakringType,Rating.rating  from tbl_Flat_Details as fT_det INNER JOIN tbl_propertyType as prty_ty ON fT_det.propertyType_id = prty_ty.propertyType_id INNER JOIN tbl_PakringType as carPk_Ty ON fT_det.carParking_Id = carPk_Ty.pakringType_id  INNER JOIN tbl_rating as Rating ON fT_det.rating_id = Rating.rating_id where fT_det.is_Active = $1',
        values: [true]
    };    
    console.log("Verify query", query);
    const client = await pool.connect();
    try {
        
        const response = await client.query(query);
        console.log(" course response"+ JSON.stringify(response.rows));
        client.release();
        return response.rows;

 
    } catch (error) {
        client.release();
    }
 
}

const getParticularFlatDetails = async (flat_id) => {
    const query = {
        text: 'select fT_det.flat_tittle,fT_det.flat_description, fT_det.address,fT_det.rooms,bathrooms, fT_det.balconies,fT_det.building_Area, fT_det.facing, fT_det.flat_image_path, fT_det.flat_image, fT_det.latitude,fT_det.longitude,fT_det.pincode, fT_det.flat_price, prty_ty.property_Type,carPk_Ty.pakringType  from tbl_Flat_Details as fT_det INNER JOIN tbl_propertyType as prty_ty ON fT_det.propertyType_id = prty_ty.propertyType_id INNER JOIN tbl_PakringType as carPk_Ty ON fT_det.carParking_Id = carPk_Ty.pakringType_id  where fT_det.is_Active = $1 and fT_det.flat_id = $2',
        values: [true, flat_id]
    };    
    console.log("Verify query", query);
    const client = await pool.connect();
    try {
        
        const response = await client.query(query);
        console.log(" course response"+ JSON.stringify(response.rows));
        client.release();
        return response.rows;

 
    } catch (error) {
        client.release();
    }
 
}
const getFlatDetailsBasedOnUser = async (area, roomType, propertyType, pincode) => {
    var searchValue = ''
    if(area) {
        searchValue = "fT_det.area like '%"+area+"%' OR ";
    }
    if(roomType) {
        searchValue += 'fT_det.rooms = '+roomType+' OR ';
    }
    if(propertyType) {
        searchValue += "prty_ty.property_Type like '%"+propertyType+"%' OR ";
    }
    if(pincode) {
        searchValue += 'fT_det.pincode = '+pincode+' OR ';
    }
    searchValue = searchValue.slice(0, -3);
    console.log("searchValue", searchValue);
    const query = {
        text: 'select fT_det.flat_tittle,fT_det.area,fT_det.flat_description, fT_det.address,fT_det.rooms,bathrooms, fT_det.balconies,fT_det.building_Area, fT_det.facing, fT_det.flat_image_path, fT_det.flat_image, fT_det.latitude,fT_det.longitude,fT_det.pincode, fT_det.flat_price, fT_det.pincode, fT_det.flat_price,prty_ty.property_Type,carPk_Ty.pakringType  from tbl_Flat_Details as fT_det INNER JOIN tbl_propertyType as prty_ty ON fT_det.propertyType_id = prty_ty.propertyType_id INNER JOIN tbl_PakringType as carPk_Ty ON fT_det.carParking_Id = carPk_Ty.pakringType_id  where fT_det.is_Active = $1 and '+searchValue+'',
        values: [true]
    };    
    console.log("Verify query", query);
    const client = await pool.connect();
    try {
        
        const response = await client.query(query);
        console.log(" course response"+ JSON.stringify(response.rows));
        client.release();
        return response.rows;

 
    } catch (error) {
        client.release();
    }
 
}

module.exports = {
    getAllUserTypes,
    getAllPropertyTypes,
    getParticularPropertyTypes,
    getAllPakringTypes,
    getParticularPakringType,
    getAllUsers,
    getParticularUsers,
    getAllFlatDetails,
    getParticularFlatDetails,
    getFlatDetailsBasedOnUser
};
