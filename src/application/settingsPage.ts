import Control from './../helper/controller';

export default class SettingsPage extends Control {
   onSave: (settings:IQuizSettings) => void;
   onBack: () => void;
   constructor(parentNode: HTMLElement){
      super(parentNode);
      const backBtn = new Control(this.node, 'button','', 'back');
      backBtn.node.onclick = () => {
         this.onBack();
      };
      const settings = {

      }
      const saveBtn = new Control(this.node, 'button','', 'save');
      saveBtn.node.onclick = () => {
         this.onSave(settings);
      };
   }
 
}

interface IQuizSettings {

}