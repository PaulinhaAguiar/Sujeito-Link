//buscar links
export async function getLinkSave(key){
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

//salvar link no localStorage
export async function saveLink(key, newlink){
    let linksStored = await getLinkSave(key);

    //se já tem salvo, não duplica
    const hasLink = linksStored.some(link => link.id === newlink.id);

    if(hasLink){
        console.log('Este link já existe');
        return;
    }

    //add link na lista
    linksStored.push(newlink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link salvo');
}

//deletar links
export function deleteLink(links, id){
    let myLinks = links.filter(item => {
        return(item.id !== id);
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    
    console.log('Link deletado');
    
    return myLinks;
}