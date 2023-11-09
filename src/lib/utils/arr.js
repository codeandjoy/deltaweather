export const getEvery = (every, arr) => {
    if(!arr.length) return [];

    let counter = 0;
    const out = [arr[0]];
    for(let i = 0; i < arr.length; i++, counter++){
        if(counter === every) {
            out.push(arr[i]);
            counter = 0;
        }
    }
    return out;
}

export const splitInto = (chunkLength, arr) =>{
    if(!arr.length) return [];
    if(chunkLength === 0) return;
    
    const chunks = [];
    for(let i = 0; i < arr.length; i += chunkLength){
        chunks.push(arr.slice(i, i + chunkLength));
    }

    return chunks;
}