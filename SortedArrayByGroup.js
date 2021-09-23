

var x = [{

    first:"appple",
    last:"test1"

},{
    first:"anothnoy",
    last:"test2"
},{

    first:"black",
    last:"test3"

},{
    first:"Crust",
    last:"test4"

},{
    first:"Crayzy",
    last:"test5"
}]

var finalReturn  = final(x);

function final(arr){

      var objectArray= arr.reduce((acc,element)=>{
        var firstLetter = element.first[0];
        if(!acc.hasOwnProperty(firstLetter))
        {
            acc[firstLetter]= { "first": firstLetter ,children : [element]  }
        }
        else {
            acc[firstLetter].children.push(element)
        }
        return acc

    },{})


     var arrayObj= Object.values(objectArray);

     console.log(arrayObj)
    return objectArray

}
