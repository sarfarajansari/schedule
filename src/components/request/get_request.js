import app_data from "../app_data/app_data"
export default async function GetRequest(url,set,loaded="",auth=false) {
    var headers = { 'Content-Type': 'application/json' }
    if (localStorage.getItem('Token') !== null){
        headers["Authorization"]="Token " + localStorage.getItem('Token')
    }
    const requestdata = {
        method: 'GET',
        headers: headers,
    }
    var Url = app_data.url+ url
    if(auth){
        Url = app_data.url.replace("schedule","auth/")+ url
    }
    const response = await fetch(Url,requestdata)
    const data = await response.json()
    set(data)
    if(loaded){
        loaded(0)
    }
    return data
}