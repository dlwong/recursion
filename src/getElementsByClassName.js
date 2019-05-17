// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


//The getElementsByClassName() method returns a collection of all elements 
//in the document with the specified class name, as a NodeList object.
//The NodeList object represents a collection of nodes. The nodes can be accessed 
//by index numbers. The index starts at 0.


//The getElementsByClassName() method returns a collection of an element's
// child elements with the specified class name, as a NodeList object.

//You should use document.body, element.childNodes, and element.classList

//The classList property returns the class name(s) of an element

//The childNodes property returns a collection of a node's child nodes, 
//as a NodeList object.

var getElementsByClassName = function(className) {
    var elArray = [];  

    function searchChild(searchNode){
        //check if it has classnames and contains our target classname
        if(searchNode.classList && searchNode.classList.contains(className)){
            elArray.push(searchNode) //add to array
        }
        if(searchNode.children.length>0){ //if it has children
            _.map(searchNode.children, function(el){ 
                searchChild(el); //recursively search
            })
        }
     }

     searchChild(document.body) //starting from the parent
     return elArray;
};

