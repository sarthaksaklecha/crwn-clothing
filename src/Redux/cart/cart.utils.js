export const addItemToCart = (cartItems,cartItemToBeAdded) => {
    const existingItem = cartItems.find(item => item.id === cartItemToBeAdded.id);
    if(existingItem) {
        console.log('hello')
        return cartItems.map(item => {
            if(item.id===existingItem.id){
                ++item.quantity;        
            }
            return item 
        })
    }
    return [...cartItems, {...cartItemToBeAdded, quantity:1}]
}