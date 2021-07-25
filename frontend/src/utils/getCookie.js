export const getCookie = (name) => {
    let res = ""
    document.cookie.split(";")
        .forEach(value => {
            let cookiePairs = value.split("=")
            if(name === cookiePairs[0].trim()){
                res = (cookiePairs[1])
            }
        })
        return res
}