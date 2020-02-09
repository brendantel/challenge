//TODO: Create a programSchema with the following types
/*
    name = string,
    school = should refrence a school
    collegeOrDeptName = string,
    degreeType = string,
    degreeLevel = string,
    schoolName = string,
    deliveryMode = string,
    requiredCredits = number,
    timeToComplete = string,
    schoolLogo = string,
    costPerCredit = number,
    costPerDegree = number,
    programUrl = string,
    programDescription = string,
    programAudience = string,
    tags: = array of string
    applicationDeadline = string
*/



const Program = mongoose.model('Program', programSchema)

export default Program