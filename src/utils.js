export const listCompare = (parentList) => {
  if(parentList.length === 0) throw Error('parentList is empty');

  return function(childList, target){

    // valid

    // if childList is empty
    if(childList.length === 0) throw Error('childList is empty!');

    // if target is not in the parentList
    const targetIndex = parentList.indexOf(target);
    if(targetIndex < 0) throw Error('target is not in the parentList');


    const indexList = childList.map((ele) => (
      parentList.indexOf(ele)
    ))

    const startIndex = Math.min(indexList);

    return parentList.slice(startIndex, targetIndex+1);
  }
}
