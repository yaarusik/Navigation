import Control from './../helper/controller';

export default class GameOverPage extends Control {
   onNext: ()=> void;
   onHome: ()=> void;
   
   constructor(parentNode: HTMLElement, result: any){
      super(parentNode);
    
      const nextBtn = new Control(this.node, 'button','', 'next');
      nextBtn.node.onclick = () => {
         this.onNext();
      };
      const homeBtn = new Control(this.node, 'button','', 'home');
      homeBtn.node.onclick = () => {
         this.onHome();
      };

    
   }
}