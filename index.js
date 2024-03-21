// Code your solution in this file!
function distanceFromHqInBlocks(Hq){
    if (Hq> 42){
    return Hq-42
}
else{
    return 42-hq
}
}
function ditancefromHqinFeet(feet){
    return distancefromHqinBlocks(feet)*264
}
function distancetravelledinFeet(start, destination)
if (start < destination){
    return (destination - start)*264
}
else[
    return(start - destinaton)*264
]
function calculateFarePrice(start,destination)
let distance=distancetravelledinFeet(start,destination)
if (distance <400){
    return 0
}
else if(distance >400 && distance<=2000){
    return(distance-400)*0.02
}
else if (ditance >2500 && distance <=2500){
    return 25 
}
else{
    return 'cannot travel that far'
}