//Lo scopo dei service è quello di contenere e raggruppare contestualmente delle funzioni che effettuino le query al database o che in qualche altro modo restituiscono dati


const getPizze = async () => {
    return [
        {
            id: 1,
            gusto:"Margherita",
            prezzo: 5
        },
        {
            id: 2,
            gusto:"Diavola",
            prezzo:1
        }
    ]
}

const getPizzaById = async (id) => {
    const pizze = await getPizze();
    return pizze.find(p => p.id === parseInt(id))
}

module.exports = {
    getPizze,
    getPizzaById
}