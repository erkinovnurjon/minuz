const GlobalFunction = {
    errorMessage(error){
        if(error.status == 400){
            var elements = Object.values(error.errors)

            return {
                detail : elements.join('\n'),
                error : 'error'
            }
        }
        if(error.status == 500){
            return {
                detail : error.detail,
                error : error.title
            }
        }
    }
}
export default GlobalFunction