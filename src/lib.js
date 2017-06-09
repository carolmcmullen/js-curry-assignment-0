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
      //return hideFunctionalCode(itemName, count);
    }

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      let t = customers.map(processCustomer)
      return t
    }

const processCustomer = currentValue => {
  let items = []
  let x = entries(currentValue.shoppingList)
  x.forEach(function(shoppingListItem) {
    let a = itemRepeater(shoppingListItem[0],
      shoppingListItem[1])
    items.push(a)
  }, this)
  
  return cart(currentValue.name, items)
}

module.exports = {
  listing,
  customer,
  constructCarts
}
