import Control from './../helper/controller';

export default class CategoriesPage extends Control {
   onBack: () => void;
   constructor(parentNode: HTMLElement){
      super(parentNode);
      const backBtn = new Control(this.node, 'button','', 'back');
      backBtn.node.onclick = () => {
         this.onBack();
      };
   }
}
