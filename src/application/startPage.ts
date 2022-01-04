import Control from './../helper/controller';

export default class StartPage extends Control {
   onSettings: () => void;
   onGameSelect: (gameName: string) => void;
   constructor(parentNode: HTMLElement){
      super(parentNode);
    

      const picturesBtn = new Control(this.node, 'button','', 'pictures');
      picturesBtn.node.onclick = () => {
         this.onGameSelect('pictures');
      };
      const artistsBtn = new Control(this.node, 'button','', 'artists');
      artistsBtn.node.onclick = () => {
         this.onGameSelect('artists');
      };
      const settingButton = new Control(this.node, 'button', '', 'settings');
      settingButton.node.onclick = () => this.onSettings();
      
   }
}
