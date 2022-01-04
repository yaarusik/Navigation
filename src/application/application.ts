import Control from './../helper/controller';
import SettingsPage from './settingsPage';
import StartPage from './startPage';
import CategoriesPage from './categoriesPage'; 


export default class Application extends Control {
   constructor(parentNode: HTMLElement){
      super(parentNode);
      this.mainCycle();
      
   }
   private mainCycle(){
      const startPage = new StartPage(this.node);
      startPage.onGameSelect = () => {
         startPage.destroy();
         const categoriesPage = new CategoriesPage(this.node);
         categoriesPage.onBack = () => {
            categoriesPage.destroy();
            this.mainCycle();
         }
      }
      startPage.onSettings = () => {
        
         startPage.destroy();
         const settingsPage = new SettingsPage(this.node);
         settingsPage.onBack = () => {
            settingsPage.destroy();
            this.mainCycle();
         }
         settingsPage.onSave = (settings) => {
            console.log('settings')
            settingsPage.destroy();
            this.mainCycle();
         }
      }
   };
}
