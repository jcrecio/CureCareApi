
let patientData = {
    name,
    gender,
    address,
    city,
    country,
    phoneNumbers: [],
    email,
    birthDate,
    height,
    weight,
    arterialPressure,
    bloodType,
    emergencyContacts: [{
        name,
        relation,
        phoneNumber,

    }],
    allergies = [
        {
            name,
            reaction,
            medicinesAssociated: []
        }
    ],
    hasSufferedAnafylaxis,
    history = {
        medicines: [
            {
                name,
                dose,
                frequency,
                secondaryEffects,
                useReason
            }
        ],
        playsSports,
        rateFrequency,
        smoker,
        smokingFrequency,
        drinksAlcohol,
        recentIllnesses: [],
        recentOperations: [],
        recentHospitalizations: [],
        hasExposedContagiousIllness,
        asmha,
        asmhaMedicaments: [],
        diabetes,
        alimentaryConstrains: [],
        highPressureHistory: [
            {
                sign,
                sympthoms,
                medicines: []
            }
        ],
        sighProblems: [],
        pregnant,
        pregnancyMonths,
        muscularProblems:[],
        skeletonProblems:[],
        articularProblems: [],
        altitudeSickness,
        epa,
        eca,
        medicalConditionNotSpecifiedPreviously,
        physicalConstrains: [],
        physicologicalConstrains: []
    }
};