const db=require('./index');


class academicAnalysis{
    constructor(){  
    }

    getAcademicAnalysis= async function() {
        const query = "";
        
        const result = await db.query(query);
        return result;
    }

    getProbable= async function() {
        const query = "";
        
        const result = await db.query(query);
        return result;
    }
    getSafe= async function() { 
        const query = "";
        
        const result = await db.query(query);
        return result;
    }
    getPersonalized= async function() {
        const query = "";
        
        const result = await db.query(query);
        return result;
    }
    getAmbitious= async function() {
        const query = "";
        
        const result = await db.query(query);
        return result;
    }

    getNonPersonalized= async function() {
        const query = "";
        
        const result = await db.query(query);
        return result;
    }
    getNonPersonalizedFiltered= async function() {
        const query = "";
        
        const result = await db.query(query);
        return result;
    }
    

    
}

module.exports=academicAnalysis;   //export the class academicAnalysis