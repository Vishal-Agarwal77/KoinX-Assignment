export function GetPosition(min,max,curr){
    let diff=max-min;
    let pos=curr-min;
    let per=(pos/diff)*100;
    return per.toFixed(0);
}