import Control from './../helper/controller';

export default class GamePage extends Control {
   onBack: () => void;
   onHome: () => void;
   onFinish: (results: IQuizResults) => void;
   
   constructor(parentNode: HTMLElement, gameOptions: IQuizOptions) {
      super(parentNode);
      const header = new Control(this.node, 'h1', '', `${gameOptions.gameName} - ${gameOptions.categoryIndex}`);

      const backBtn = new Control(this.node, 'button','', 'back');
      backBtn.node.onclick = () => {
         this.onBack();
      };
      const homeBtn = new Control(this.node, 'button','', 'home');
      homeBtn.node.onclick = () => {
         this.onHome();
      };

      const finishBtn = new Control(this.node, 'button', '',  'finish');
      finishBtn.node.onclick = () => {
         this.onFinish({});
      }
   }
}

interface IQuizOptions {
   gameName: string;
   categoryIndex: number;
}
interface IQuizResults{}