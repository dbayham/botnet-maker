class DonutMaker{

    constructor() {
        this._clickCount = 0;
        this._autoClickerCount = 0;
        this.autoClickerCost = 100;
        this.multiplierCount = 0;
        this.multiplierCost = 10;
    }

// can retrieve a donut count
    get clickCount(){
        return this._clickCount;
    }

//can retrieve an Auto Clicker count
    get autoClickerCount(){
        return this._autoClickerCount;
    }

}

   ////////////////////////////^^^^bluePrint^^^////////////////////////////////////////////////////

const widgetMaker = new DonutMaker();
//can add to the widget count
   function recordClick() {
       if(widgetMaker.multiplierCount>0){
           widgetMaker._clickCount = widgetMaker._clickCount+Math.pow(1.2,widgetMaker.multiplierCount);
       }else{
        widgetMaker._clickCount++;
    }
}

//can add to the Auto Clicker count
    function recordAutoClickerCount(){
        widgetMaker._autoClickerCount++;
    }

//can add to the widget Multiplier count
    function recordMultiplierCount(){
    widgetMaker.multiplierCount++;
  }

//Feature 2 - subtract the autoclicker cost from widget count if eligible to purchase, activate autoclicker and increase cost by 10%
    function clickCountLossToAutoClickerPurchase() {
        if(widgetMaker._clickCount>=widgetMaker.autoClickerCost){
        widgetMaker._clickCount-=widgetMaker.autoClickerCost;
        recordAutoClickerCount(widgetMaker);
        increaseCostOfSubsequentAutoClickerPurchase(widgetMaker);
        activateAutoClicker(widgetMaker);
    }
    else{}
    }

    function clickCountLossToMultiplierPurchase(){
        if(widgetMaker._clickCount>=widgetMaker.multiplierCost){
            widgetMaker._clickCount-=widgetMaker.multiplierCost;
            recordMultiplierCount(widgetMaker);
            increaseCostofSubsequentMultiplierPurchase(widgetMaker);
        }
    }


//increases the cost of the second and so forth Auto Clicker by an additional 10% per purchase
   function increaseCostOfSubsequentAutoClickerPurchase(){
       widgetMaker.autoClickerCost = widgetMaker.autoClickerCost * 1.1;
   }

//increases the cost of the second and so forth Multiplier by an additional 10% per purchase
   function increaseCostofSubsequentMultiplierPurchase(){
       widgetMaker.multiplierCost = widgetMaker.multiplierCost * 1.1;
   }

//Feature 5&6 - when auto clicker event is executed, increases the value of each auto clicker by the amount of donut multiplier
   function activateAutoClicker(){
       setInterval(() => {
        recordClick(widgetMaker);
        updateClicks(widgetMaker)
       }, 1000);
   }


   const updateClicks = function(widgetMaker){
    const botCount = document.querySelector(".bot__Count");
    botCount.innerHTML = Math.round(widgetMaker.clickCount);
   }

   const updateAutoClickers = function(widgetMaker){
       const autoBotCount = document.querySelector(".autoBot__Count");
       autoBotCount.innerHTML = widgetMaker.autoClickerCount;
   };

   const updateMultipliers = function(widgetMaker){
       const botMultiplier = document.querySelector(".bot__Multiplier");
       botMultiplier.innerHTML = widgetMaker.multiplierCount;
   };

   const botAutoClickerCost = document.querySelector(".autoBot__cost");
   botAutoClickerCost.innerHTML = widgetMaker.autoClickerCost;

   const botMultiplierCost = document.querySelector(".multiplier__cost");
   botMultiplierCost.innerHTML = widgetMaker.multiplierCost;

   updateClicks(widgetMaker);

   const botNetButton = document.querySelector(".botNetButton");
    botNetButton.addEventListener("click", ()=>{
   recordClick(widgetMaker);
    updateClicks(widgetMaker);
   });

   const purchaseAutoClicker = document.querySelector(".purchaseAutoClicker");

    purchaseAutoClicker.addEventListener("click", ()=>{
        clickCountLossToAutoClickerPurchase(widgetMaker);
        updateClicks(widgetMaker);
        updateAutoClickers(widgetMaker);
   });

   const purchaseBotMultiplier = document.querySelector(".purchaseBotMultiplier");

   purchaseBotMultiplier.addEventListener("click", ()=>{
       clickCountLossToMultiplierPurchase(widgetMaker);
       updateClicks(widgetMaker);
       updateMultipliers(widgetMaker);
   })

//button sound functions
   function playSound (){
       document.getElementById("play").play();
   }

   function playOof (){
       document.getElementById("oof").play();
   }

   //reset game function
   function resetGame(){
     location.reload();
     
   }

   const resetButton = document.querySelector(".resetGame");

   resetButton.addEventListener("click", ()=>{
       resetGame(widgetMaker);


   });






   ////////*************************************** */
   //Feature 7 About the developer Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

