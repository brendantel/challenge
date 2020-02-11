import { Types } from 'mongoose'

// Create the program resolver
const program = async (parent, { data }, ctx, info) => {
    //should accept an id on the data param and return a single program with the school feild populated
    const isObjectId = Types.ObjectId.isValid(data.id)
    if (!isObjectId) {
        throw new Error(`Invalid id: ${data.id}. Input must be a valid objectId.`)
    }
    const { models: { Program } } = ctx
    return await Program.findById(data.id).populate('school')
}

//TODO: Create the program search resolver
const programSearch = async (parent, { data }, ctx, info) => {
    const pagination = {
        skip: data.offset || 0,
        limit: data.limit || 0
    }
    console.log(pagination)
    const { models: { Program } } = ctx
    const queryObj = {}
    if (data.term) {
        queryObj.$or = []
        const searchFields = ['name', 'degreeType', 'schoolName', 'deliveryMode'].forEach(field => {
            queryObj.$or.push({ [field]: { $regex: data.term, $options: 'i' } })
        })
    }
    const query = Program.find(queryObj, null, pagination)
    const countQuery = Program.countDocuments(queryObj, null, {skip: 0, limit: 0})

    return await Promise.all([query, countQuery]).then(([programs, count]) => {
        return {
            count,
            programs
        }
    })

    /*
        should have optional params, term, filter, limit, and offset
        if offset and limit are not provided set the defaults to offset = 0, limit = 0
        return a list of programs based on the search term and filter provided.
        on the program use the term to search the following fields
        name, degreeType, degreeLevel, schoolName, deliveryMode
        also return the number of documents returned by the query on a parameter
        called count
    */
}


const Query = {
    program,
    programSearch
}

export default Query