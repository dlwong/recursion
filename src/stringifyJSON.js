// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number') {
    return ""+obj;
  }else if (obj === null) {
    return ""+null;
  }else if (typeof obj === 'string'){
    return "\""+obj+"\"";
  }else if(typeof obj === 'boolean'){
    return ""+obj;
  }else if (Array.isArray(obj)){
    let stringArray = '['

    if(obj.length>0){
       _.each(obj, function(x){
          stringArray += stringifyJSON(x);

          if(obj.length>1){
            stringArray += ','
          }
       })
    if(obj.length>1){
       stringArray = stringArray.slice(0,stringArray.length-1)
       }
    }
    return stringArray += ']';
  }else if(typeof obj === "object") {
    if(Object.keys(obj).length === 0){
      return '{}';
    }

    let stringObj = '{'; 

    for(var k in obj) {
        if(typeof obj[k] === 'function') {
          return stringObj+'}'
        }else{
    	stringObj += stringifyJSON(k) + ':' + stringifyJSON(obj[k]) + ",";
        }
    }
    return stringObj.slice(0, stringObj.length - 1) + '}'

  } 
}
