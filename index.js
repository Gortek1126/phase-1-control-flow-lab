function scuberGreetingForFeet(rideDistance){
  
  if (rideDistance <= 400) {
    return 'This one is on me!'
  }
    else if (rideDistance < 2000) {
      return 'That will be twenty bucks.'
    }
    else if (rideDistance < 2500)
      return 'I will gladly take your thirty bucks.'
    else (rideDistance)
      return 'No can do.'
}

function ternaryCheckCity(isCity){
  return isCity === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}
 
function switchOnCharmFromTip(tips){
  switch(tips) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}