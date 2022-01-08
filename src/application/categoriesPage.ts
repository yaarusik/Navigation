import Control from './../helper/controller';

export default class CategoriesPage extends Control {
   onBack: () => void;
   onSelect: (index: number) => void;

   constructor(parentNode: HTMLElement, gameName: string){
      super(parentNode);

      const header = new Control(this.node, 'h1', '', gameName)

      const backBtn = new Control(this.node, 'button','', 'back');
      backBtn.node.onclick = () => {
         this.onBack();
      };

      const categoriesList = [1,2,3,4,5,6,7];
      const categoryBattons = categoriesList.map((item, i) =>{
         const button = new Control(this.node, 'button','', item.toString());
         button.node.onclick = () => {
            this.onSelect(i);
         }
         return button;
         });
   }
}
