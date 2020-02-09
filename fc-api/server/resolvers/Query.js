

//TODO: Create the program resolver
const program = async (parent, {data}, ctx, info) => {
    //should accept an id on the data param and return a single program with the school feild populated
}

//TODO: Create the program search resolver
const programSearch = async (parent, {data}, ctx, info) => {
 
    /*
        should have optional params, term, filter, limit, and offset
        if offset and limit are not provided set the defaults to offset = 0, limit = 0
        return a list of programs based on the search term and filter provided.
        on the program use the term to search the following fields
        name, degreeType, degreeLevel, schoolName, deliveryMode
        also return the number of documents returned by the query on a parameter
        called count
    */


        return {count, programs}
}


const Query = {
    program,
    programSearch
}

export default Query