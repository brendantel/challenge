import mongoose from 'mongoose'
const { Schema } = mongoose

const schoolSchema = {
    name: String,
    programs: [{ type: Schema.Types.ObjectId, ref: 'Program' }],
    universityName: String,
    departments: [String],
    campusLocations: [String],
    schoolType: String,
    accreditation: String,
    schoolLogo: String,
    schoolDescription: String,
    totalEnrollment: Number,
    backgroundColor: String,
    gradientColor: [String],
    engineeringDevisionDescription: String,
    costPerUnit: [Number]
}

const School = mongoose.model('School', schoolSchema)

export default School