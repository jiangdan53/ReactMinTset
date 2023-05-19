/* eslint-disable import/no-anonymous-default-export */
function itic(length){
    let number = Math.random().toString(36).substring(2,length).split('').join(',')
    return number
}
export default {
    INIT:()=>{
        return `INIT${itic(6)}`
    },
    PROBE:()=>{
        return `PROBE_UNKNOWN_ACTION${itic(6)}`
    }
}
