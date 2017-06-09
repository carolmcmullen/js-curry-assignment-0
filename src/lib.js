'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater = 
  itemName =>
    count => {
      let result = []
      let index = 0
      while (index < count) {
        result.push(itemName) 
        index++
      }
      return result 
    }

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => 
      customers.map(processCustomer)
    

const processCustomer = currentValue => {
  let items = []
  entries(currentValue.shoppingList).forEach(function(shoppingListItem) {
    items = items.concat(itemRepeater(shoppingListItem[0])(shoppingListItem[1]))
  })
  
  return cart(currentValue.name, items)
}

module.exports = {
  listing,
  customer,
  constructCarts
}
