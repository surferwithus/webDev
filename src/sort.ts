// undefine =? "값"
// [1, undefine] => 안 됨
// order를 "제한할 수 있지 않을까?"
export function simpleSort(arr: number[], order = "asc"): number[] {
    const sortedArr = [...arr]; // 기본 정보를 복제할 때 사용하는 연산자
    for (let i=0; i<sortedArr.length-1; ++i) {
        for (let j=0; j<sortedArr.length-1-i; j++) {
            if (sortedArr[j] > sortedArr[j+1]) {
                const temp = sortedArr[j];
                sortedArr[j] = sortedArr[j+1];
                sortedArr[j+1] = temp;
            }
        }
    } 
    return sortedArr;
}
