// 双指针
function quickSort(list,leftIndex,rightIndex){
  let basic = list[leftIndex];
  let minIndex =  leftIndex
  let maxIndex = minIndex+1;
  if(leftIndex >= rightIndex) return
  for(let i = leftIndex+1;i<=rightIndex;i++){
  debugger
    if(list[i]>basic){
      maxIndex++
    }else{
      let tem = list[minIndex+1] 
      list[minIndex+1] = list[maxIndex]
      list[maxIndex] =tem
      minIndex++
      maxIndex++
    }
  }
  debugger
  let tem = list[leftIndex] 
  list[leftIndex] = list[minIndex]
  list[minIndex] =tem
  quickSort(list,leftIndex,minIndex-1)
  quickSort(list,minIndex+1,rightIndex)
}
let a = [10,3,4,5,1,2,6,7,8,13]
quickSort(a,0,a.length-1)
console.log(a)