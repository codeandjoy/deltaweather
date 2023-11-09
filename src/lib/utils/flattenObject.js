// ***
// Gets object of shape:
// {
//  "1,2,3": "value1",
//  "4,5,6": "value2"
// }
//
// and turns it into:
// {
//  "1": "value1",
//  "2": "value1",
//  "3": "value1",
//  "4": "value2",
//  "5": "value2",
//  "6": "value2"
// }
// ***

const flattenObject = (obj) => {
    let flatObj = {};
    for(const key in obj){
        for(const subKey of key.split(',')){
            flatObj[subKey] = obj[key];
        }    
    }
    return flatObj;
};

export default flattenObject;