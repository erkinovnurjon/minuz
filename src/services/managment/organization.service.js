import ApiService from '../api.service'

const OrganizationService = {
    Get(id,inn){
        return ApiService.get(`/Organization/Get?id=${id}&inn=${inn}`)
    },
    GetAll(oblastid, regionid, admissiontypeid, schoolYearId, educationLanguageId, showOnlyHasRestQuota, schooltypeid, organizationTypeId){
        if(schoolYearId === undefined){
            schoolYearId = 0
        }
        if(educationLanguageId === undefined){
            educationLanguageId = 0
        }
        if(showOnlyHasRestQuota === undefined){
            showOnlyHasRestQuota = false
        }
        return ApiService.get(`/Organization/GetAll?oblastid=${oblastid}&regionid=${regionid}&admissiontypeid=${admissiontypeid}&schoolYearId=${schoolYearId}&educationLanguageId=${educationLanguageId}&showOnlyHasRestQuota=${showOnlyHasRestQuota}&schooltypeid=${schooltypeid}&organizationTypeId=${organizationTypeId}`)
    }, 
    GetList(oblastid, regionid, Search,SortColumn, OrderType, PageNumber, PageLimit){
        return ApiService.get(`/Organization/GetList?oblastid=${oblastid}&regionid=${regionid}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
    },
    GetOrgInfo(organizationid){
        return ApiService.get(`/Organization/GetOrgInfo?organizationid=${organizationid}`)
    },
    GetAllOflineOrganization(oblastid,regionid){
        return ApiService.get(`/Organization/GetAllOflineOrganization?oblastid=${oblastid}&regionid=${regionid}`)
    }
}
export default OrganizationService