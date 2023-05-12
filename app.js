var StarBucks = {
    coffee: {
        Latte: 'Latte Coffee',
        Cappuccino: 'Cappuccino Coffee',
        Mokiato: 'Mokiato Coffee',
        Espresso: 'Espresso Coffee'
    },
    tea: {
        Black: 'Black Tea',
        Green: 'Green Tea',
        Herbal: 'Herbal Tea',
        Fruit: 'Fruit Tea',
    }
}
console.log(StarBucks)
console.log(StarBucks.coffee)
console.log(StarBucks.coffee.latte)
console.log(StarBucks.coffee.cappuccino)
console.log(StarBucks.coffee.mokiato)
console.log(StarBucks.coffee.espresso)

console.log(StarBucks.tea)
console.log(StarBucks.tea.black)
console.log(StarBucks.tea.green)
console.log(StarBucks.tea.herbal)
console.log(StarBucks.tea.fruit)

var Order = prompt('Enter your order')
if (Order === 'Latte' || Order === 'Cappuccino' || Order === 'Mokiato' || Order === 'Espresso'){
    console.log('Your Coffee order was successfully done, please wait till it ready.')
}
else if (Order === 'Black tea' || Order === 'Green tea' || Order === 'Herbal tea' || Order === 'Fruit tea'){
    console.log('Your Tea order was successfully done, please wait till it ready.')
}
else
    console.log('Your order is not correct or its not avialable now. Please try back later!')

