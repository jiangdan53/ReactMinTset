
import {effctTypes}  from './effectHelper'
import { callEffect } from './effects/effectCall';
import { applyEffect } from './effects/apply';
import { putEffect } from './effects/put';
import { selectEffect } from './effects/select';
import { takeEffect } from './effects/take';
import { fokeEffect } from './effects/fork';
import  { cancalEffect} from './effects/cancel'
import { allEffect } from './effects/all';
// eslint-disable-next-line import/no-anonymous-default-export
export default  function(stort,effect,next){
    switch (effect.type){
        case effctTypes.CALL:
        callEffect(stort,effect,next)
        break;
        case effctTypes.APPLY :
        applyEffect(stort,effect,next)
            break;
        case effctTypes.PUT :
        putEffect(stort,effect,next)
        break;
        case effctTypes.SELECT:
            selectEffect(stort,effect,next)
            break;
        case effctTypes.TAKE :
            takeEffect(stort,effect,next)
            break;
            case effctTypes.FORK :
                fokeEffect(stort,effect,next)
            break;
            case effctTypes.CANCAL :
                cancalEffect(stort,effect,next)
                break;
            case effctTypes.ALL :
                allEffect(stort,effect,next)
        default :
        return  new Error('saga Effect is no undefinde')

    }

}