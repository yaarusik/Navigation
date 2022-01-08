import Control from './../helper/controller';
import SettingsPage from './settingsPage';
import StartPage from './startPage';
import CategoriesPage from './categoriesPage'; 
import GamePage from './gameField';
import GameOverPage from './gameOverPage';

export default class Application extends Control {
   constructor(parentNode: HTMLElement){
      super(parentNode);
      this.mainCycle();
      
   }

   private gameCycle(gameName: string, categoryIndex:number){
       const gameField = new GamePage(this.node, {gameName: gameName, categoryIndex: categoryIndex});
         gameField.onHome = () => {
            gameField.destroy();
            this.mainCycle();
         }
         gameField.onBack =() => {
            gameField.destroy();
            this.categoriesCycle(gameName);
         }
         gameField.onFinish = (result) => {
            gameField.destroy();
            const gameOverPage = new GameOverPage(this.node, result);
            gameOverPage.onHome = () => {
               gameOverPage.destroy();
               this.mainCycle();
            }
            gameOverPage.onNext = () => {
               gameOverPage.destroy();
               this.gameCycle(gameName, categoryIndex + 1)
            }
         }
   }

   private categoriesCycle(gameName: string){
      const categoriesPage = new CategoriesPage(this.node, gameName);
      categoriesPage.onBack = () => {
         categoriesPage.destroy();
         this.mainCycle();
      }
      categoriesPage.onSelect = (index) => {
         categoriesPage.destroy();
         this.gameCycle(gameName, index)
        
      }
   }

   private mainCycle(){
      const startPage = new StartPage(this.node);
      startPage.onGameSelect = (gameName) => {
         startPage.destroy();
         this.categoriesCycle(gameName);
        
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
