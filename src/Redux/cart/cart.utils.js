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
            if(item.quantity === 0){
                let confirmRemoval = window.confirm("Do you wish to remove the item?");
                if(confirmRemoval) removeItemIndex =i;
                else item.quantity++;
            }else{
                removeItemIndex = false;  
            }
        } 
        return {...item}
    });
    if(removeItemIndex !== false){
        newCart.splice(removeItemIndex,1);
    }        
    return newCart
}