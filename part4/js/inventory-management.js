/*eslint-env browser*/


/*eslint-env browser */
function displayMenu(){
    "use strict";
    window.console.log("Welcome to The Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all inventory");
    window.console.log("update - update existing product’s inventory (quantity)");
    window.console.log("exit - exit the program");
    window.console.log("");
} 

function display(inventoryList){
   "use strict";
   var i;

   for(i=0;i<inventoryList.length;i+=1){
    window.console.log(inventoryList[i][0] + " " + inventoryList[i][1] + " (" + inventoryList[i][2] + ") $" + inventoryList[i][3]);
   }
   window.console.log("");
}


function update(inventoryList){
   "use strict";
   var i;
   var skuNumber= Number(window.prompt("Enter the SKU number:"));
  
   if(isNaN(skuNumber)){
         window.alert("Invalid SKU Number");
         return;
   }

   for(i=0;i<inventoryList.length;i+=1){
        if (skuNumber === inventoryList[i][0]){
            var quantityNumber= Number(window.prompt("Enter the new stock quantity:"));
            if(!isNaN(quantityNumber)){
                inventoryList[i][2] = quantityNumber;
                window.console.log(quantityNumber + " was added."); 
            }  
            else{
                window.alert("Invalid quantity Number");
            }
            return; 
        }
    }   
    window.console.log("");
}

function main(){
   "use strict"; 
   var inventoryList,command;
   displayMenu();
   inventoryList=[[4824,"Shirt", 10, 15.99],[6343 ,"Jeans", 22, 39.99],[3223,"Socks", 36, 9.99],[2233,"Hat", 12, 14.99],[9382,"Jacket", 5, 49.99]];
   
   while(true){
       command= window.prompt("Enter the command");
       if(command !== null){
           if(command === "view"){
               display(inventoryList);
           }
           else if(command === "update"){
               update(inventoryList);
           }
           else if(command === "exit"){
               break;
           }
           else{
               window.alert("that is not a valid command");
           }
       }
       else{
           break;
       }
   }
   window.console.log("Program Terminated");
}
main();
