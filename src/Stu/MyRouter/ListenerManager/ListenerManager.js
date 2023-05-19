export default class ListenerManager {
    Listeners = [];
    Listener(Listener){
        this.Listeners.push(Listener)
        let unlisteners = ()=>{
            const index = this.Listeners.indexOf(Listener)
            this.Listeners.splice(index,1)
        }
        return unlisteners
    }
    trigeListener(location,action){
        for (const litener of this.Listeners) {
            litener(location,action)
        }
    }

}