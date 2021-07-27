import { DonutMaker } from "./donut-maker.js";
const botNetMaker = new DonutMaker;
botNetMaker.updateClicks();
botNetMaker.botNetButton.addEventListener("click", ()=> botNetMaker.recordClick());
botNetMaker.purchaseAutoClicker.addEventListener("click", ()=> botNetMaker.clickCountLossToAutoClickerPurchase());
botNetMaker.resetGame.addEventListener("click", ()=> botNetMaker.resetGame());

