export const a = () => {
   console.log('dfgf');
}

// class Control<NodeType extends HTMLElement = HTMLElement>{
//    public node: NodeType;
 
//    constructor(parentNode: HTMLElement | null, tagName = 'div', className = '', content = '') {
//      const el = document.createElement(tagName);
//      el.className = className;
//      el.textContent = content;
//      if (parentNode) {
//        parentNode.append(el);
//      }
//      this.node = el as NodeType;
//    }
 
//    destroy(): void {
//      this.node.remove();
//    }
   
//  }
 
//  export default Control;


// class Signal<ListenerType> {
//    private listeners : Array<(params : ListenerType)=>void>;
 
//    constructor() {
//      this.listeners = [];
//    }
 
//    add(listener : (params : ListenerType)=>void) {
//      this.listeners.push(listener);
//    }
 
//    remove(listener : (params : ListenerType)=>void) {
//      this.listeners = this.listeners.filter((elem) => elem !== listener);
//    }
 
//    emit(params:ListenerType) {
//      this.listeners.forEach((listener) => listener(params));
//    }
//  }
//  export default Signal;


// import Signal from "./signal";

// export default class State <DataType> {
//   private data: DataType;
//   public onUpdate: Signal<{from:DataType,to:DataType}> = new Signal();
//   constructor(initialState:DataType) {
//     this.data = initialState;
//   }

//   setData(data: DataType) {
//     const lastData = this.data;
//     this.data = data;
//     this.onUpdate.emit({from:lastData,to:this.data});
//   }

//   getData() {
//     return this.data;
//   }
// }