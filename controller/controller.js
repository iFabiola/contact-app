import { pool } from "../dbconfig/database.js"

let pool_ = pool.promise(); 


export const ACTIONS = {
    registerUser: async function(payload) {
       return await pool.query(`INSERT INTO contacts VALUES(0, "${payload.names}", "${payload.email}", "${payload.phone}", "${payload.image}")`, function(error) {
            if(error) {
                return error;
            }

            return true
        })
    },

    readContact: async function() {
        return await pool_.query("SELECT * FROM contacts");
    },

    updateUser: async function(payload) {
    //    console.log(payload);
        return await pool_.query(`UPDATE contacts SET names ="${payload.names}", email = "${payload.email}", phone = "${payload.phone}",image="${payload.image}" WHERE id = ${payload.id}`)
    },

    deleteUser: async function(phone) {
        return await pool_.query(`DELETE FROM contacts WHERE phone = ${phone}`)
    }
}