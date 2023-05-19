
export const ResultActionType = {
    condition:Symbol('condition-action-type')
}
export const chengeSearch = (condition)=>{
        return  {
            type:ResultActionType.condition,
            payload:condition
        }
}
