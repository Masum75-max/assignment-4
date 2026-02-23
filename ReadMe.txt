
1.Ans to the question No 1:
getElementById(): selects an element according to the parameter that is passsed inside ().and the parameter passed must be an id of an element.

getElementsByClassName(): Selects multiple elements according to the class name passed inside first bracket.it returns a HTML collection.

HTML collection is not an array.So we cannot run for each looop through it.we must convert it into an array by array.from().it is dynamic.

querySelector(): selects an element using tag or classname or id name.We have to pass exact selector through ().for class we pass .className for selecting id we pass #idName.if there is multiple of them then it slects the frist one.

querySelectorAll():just like the previous one.but it returns a node list which is static.






2.Ans to the question No 2:

First of all i create an element by calling document.createElement("any tag name").and i keep them inside a variable.

Secondly, i give some innerText or innerHtml.Add class names 

Thirdly, i pick the contianer in which i will insert and the append my new element to this element by container.append(newElement)




3.Ans to the question No. 3

Event bubbling is firstly when an event happens it finds the target element and then propagate from the target to its parent to its grandparent to its praent finally to document.




4.Ans to the question No 4:

Event delegation is adding event listener to the parent of all child.
it is usefull because we dont have to handle each child node separateely.when eevent happens in  child.it bubbles back to the parent and becomes applicable to all child.




5.Ans to the question No 5.
preventDefault(): It prevents browser from behaving normally.Like when a form is submitted,normally the page relodes and the informations goes to the server bt if we preventDefault then it doesnt happen.the browser doesnt reload

Stopropagation():We know event bubbles up towards the parents but when propagation is stopped the event stops there and doesnt go up 