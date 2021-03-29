var movies=[156, 188, 182, 198, 201, 265, 254,193, 288, 287, 245, 165, 134, 155, 204, 126, 133, 119, 
           142, 184, 172, 170, 123, 79, 81, 91, 66, 61, 111, 120, 282, 123, 121, 331, 121, 94, 92,
           90, 77, 86, 88, 101, 135,89]

function calculate(lengthofFlight, movieDuration)
{
  var found=[]
  movieDuration.forEach((val, index, arr)=>{
    for(var c=index+1; c<arr.length; c++){
      if(arr[index]+arr[c]===lengthofFlight){
        var obj={
          first: arr[index],
          second: arr[c]
        }
        found.push(obj)
      }
    }
  })
  console.log(found)
}

calculate(312,movies);




