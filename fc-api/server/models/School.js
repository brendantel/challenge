//TODO: create a schoolSchema with the following types
/*
    name = string
    programs = array of programs
    universityName = string
    departments = array of strings
    campusLocations = string
    schoolType = string
    accreditation = string
    schoolLogo = string
    schoolDescription = string
    totalEnrollment = number
    backgroundColor = string
    gradientColor = array of string
    engineeringDevisionDescription = string
    costPerUnit = array of numbers
*/



const School = mongoose.model('School', schoolSchema)

export default School