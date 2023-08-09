const recipesToArr = (obj) => {
    let arr = []

    for (const prop in obj)
        arr.push({item: prop, recipe: recipeToArr(obj[prop])});

    return arr;
}


const recipeToArr = obj => {
    let arr = [];
    
    for(const item in obj){
        for(let i = 0; i < obj[item]; i++){
            arr.push(item.toString());
        }
    }

    return arr.sort();
}

export const recipesAsObj = {
    //Chemical elements
    carbon: {
        electron: 6, 
        neutron: 6,
        proton: 6
    },
    hydrogen: {
        electron: 1,
        proton: 1
    },
    nitrogen: {
        electron: 7,
        neutron: 7,
        proton: 7
    },
    oxygen: {
        electron: 8,
        neutron: 8,
        proton: 8
    },



    //Chemical compunds
    adenine: {
        carbon: 5,
        hydrogen: 5,
        nitrogen: 5
    },
    cytosine: {
        carbon: 4,
        hydrogen: 5,
        nitrogen: 3
    },
    guanine: {
        carbon: 5,
        hydrogen: 5,
        nitrogen: 5
    },
    thymine: {
        carbon: 5,
        hydrogen: 6,
        nitrogen: 2
    },



    //DNA
    dna: {
        adenine: 1,
        cytosine: 1,
        guanine: 1,
        thymine: 1
    }
}



export const recipesAsArr = recipesToArr(recipesAsObj);