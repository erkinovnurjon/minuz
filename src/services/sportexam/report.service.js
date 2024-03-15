import ApiService from "../api.service"

const ReportService = {
    GetOtmExamGroupResultCount(oblastId, regionId, schoolYearId, organizationTypeId, schoolTypeId, isByHigherEduClassifier, higherEduClassifierId, educationFormTypeId, educationLanguageId, genderId, showAllRegion, showAllOrganization) {
        return ApiService.get(
            `/sportexam/Report/GetOtmExamGroupResultCount?oblastId=${oblastId}&regionId=${regionId}&schoolYearId=${schoolYearId}&organizationTypeId=${organizationTypeId}&schoolTypeId=${schoolTypeId}&isByHigherEduClassifier=${isByHigherEduClassifier}&higherEduClassifierId=${higherEduClassifierId}&educationFormTypeId=${educationFormTypeId}&educationLanguageId=${educationLanguageId}&genderId=${genderId}&showAllRegion=${showAllRegion}&showAllOrganization=${showAllOrganization}`
        );
    },
    GetOtmExamGroupResult(schoolYearId, organizationId, higherEduClassifierId, educationFormTypeId, educationLanguageId, genderId) {
        return ApiService.get(
            `/sportexam/Report/GetOtmExamGroupResult?schoolYearId=${schoolYearId}&organizationId=${organizationId}&higherEduClassifierId=${higherEduClassifierId}&educationFormTypeId=${educationFormTypeId}&educationLanguageId=${educationLanguageId}&genderId=${genderId}`
        );
    },
    PrintOtmExamGroupResult(schoolYearId, organizationId, higherEduClassifierId, educationFormTypeId, educationLanguageId, genderId) {
        return ApiService.print(
            `/sportexam/Report/PrintOtmExamGroupResult?schoolYearId=${schoolYearId}&organizationId=${organizationId}&higherEduClassifierId=${higherEduClassifierId}&educationFormTypeId=${educationFormTypeId}&educationLanguageId=${educationLanguageId}&genderId=${genderId}`
        );
    },
    GetSportSchoolExamGroupResultCount(oblastId, regionId, schoolYearId, organizationTypeId, schoolTypeId, isBySportTypeClassifier, sportTypeClassifierId, genderId, showAllRegion, showAllOrganization) {
        return ApiService.get(
            `/sportexam/Report/GetSportSchoolExamGroupResultCount?oblastId=${oblastId}&regionId=${regionId}&schoolYearId=${schoolYearId}&organizationTypeId=${organizationTypeId}&schoolTypeId=${schoolTypeId}&isBySportTypeClassifier=${isBySportTypeClassifier}&sportTypeClassifierId=${sportTypeClassifierId}&genderId=${genderId}&showAllRegion=${showAllRegion}&showAllOrganization=${showAllOrganization}`
        );
    },
    PrintSportSchoolExamGroupResultCount(oblastId, regionId, schoolYearId, organizationTypeId, schoolTypeId, isBySportTypeClassifier, sportTypeClassifierId, genderId, showAllRegion, showAllOrganization) {
        return ApiService.print(
            `/sportexam/Report/PrintSportSchoolExamGroupResultCount?oblastId=${oblastId}&regionId=${regionId}&schoolYearId=${schoolYearId}&organizationTypeId=${organizationTypeId}&schoolTypeId=${schoolTypeId}&isBySportTypeClassifier=${isBySportTypeClassifier}&sportTypeClassifierId=${sportTypeClassifierId}&genderId=${genderId}&showAllRegion=${showAllRegion}&showAllOrganization=${showAllOrganization}`
        );
    },
    GetSportSchoolExamGroupResult(schoolYearId, organizationId, sportTypeClassifierId, genderId) {
        return ApiService.get(
            `/sportexam/Report/GetSportSchoolExamGroupResult?schoolYearId=${schoolYearId}&organizationId=${organizationId}&sportTypeClassifierId=${sportTypeClassifierId}&genderId=${genderId}`
        );
    },
    PrintSportSchoolExamGroupResult(schoolYearId, organizationId, sportTypeClassifierId, genderId) {
        return ApiService.print(
            `/sportexam/Report/PrintSportSchoolExamGroupResult?schoolYearId=${schoolYearId}&organizationId=${organizationId}&sportTypeClassifierId=${sportTypeClassifierId}&genderId=${genderId}`
        );
    },
    PrintOtmExamGroupResultCount(oblastId, regionId, schoolYearId, organizationTypeId, schoolTypeId, isBySportTypeClassifier, sportTypeClassifierId, genderId, showAllRegion, showAllOrganization) {
        return ApiService.print(
            `/sportexam/Report/PrintOtmExamGroupResultCount?oblastId=${oblastId}&regionId=${regionId}&schoolYearId=${schoolYearId}&organizationTypeId=${organizationTypeId}&schoolTypeId=${schoolTypeId}&isBySportTypeClassifier=${isBySportTypeClassifier}&sportTypeClassifierId=${sportTypeClassifierId}&genderId=${genderId}&showAllRegion=${showAllRegion}&showAllOrganization=${showAllOrganization}`
        );
    },


    
}
export default ReportService