// Ask if the user wants to create a grocery list
let createList = prompt("Do you want to create a grocery list? (y/n)");

if (createList === "y") { // If the user says "y"
    // Ask for the number of items
    let numItems = Number(prompt("Enter the number of items to be registered in the grocery list:"));
    let grocery_list = [];

    // Get items from the user
    for (let i = 0; i < numItems; i++) {
        let item = prompt("Enter an item:");
        grocery_list.push(item); // Add item to the list
    }

    // Create sorted and reversed versions of the list
    let groceryList_Sort = [...grocery_list].sort(); 
    let groceryList_Reverse = [...grocery_list].reverse(); 

 // Display the lists correctly
    alert("The Grocery List: " + grocery_list); 
    alert("The Grocery List (Sorted): " + groceryList_Sort); 
    alert("The Grocery List (Reversed): " + groceryList_Reverse);
}
