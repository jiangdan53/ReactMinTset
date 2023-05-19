import { delay ,take} from "../../../../MyRedux/Mysaga/effects"
import { ResultActionType } from "../../Student-Action/result-Action"
export  default function* (){
    console.log('获取所有学生数量All指令')
    while (true) {
          yield delay(1000)
        let result = yield take(ResultActionType.condition)
        console.log(result)
    }
 

}