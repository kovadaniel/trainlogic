interface SearchableType{
    name: string,
}

export function getByName<T extends SearchableType>(name: string, array:T[]):T|null {
    for(let item of array){
        if(item.name === name) return item;
    }
    return null;
}
