export const addItemToCart = (cartItems,cartItemToBeAdded) => {
    const existingItem = cartItems.find(item => item.id === cartItemToBeAdded.id);
    if(existingItem) {
        return cartItems.map(item => {
            if(item.id===existingItem.id){
                ++item.quantity;        
            }
            return {...item} 
        })
    }
    return [...cartItems, {...cartItemToBeAdded, quantity:1}]
}

export const reduceItem = (cartItems,cartItemToReduce) => {
    let removeItemIndex = false
    let newCart = cartItems.map((item,i) => {
        if(item.id === cartItemToReduce.id){
            --item.quantity
            removeItemIndex = item.quantity === 0 ? i : false;  
        } 
        return {...item}
    });
    if(removeItemIndex !== false){
        newCart.splice(removeItemIndex,1);
    }        
    return newCart
}