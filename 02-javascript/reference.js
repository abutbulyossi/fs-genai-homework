let car ={
    brand:"Susita",
    model:"Camel",
    year:"1965"

}
car.color="Red"
car.brand="Toyota"
delete car.year
console.log(car)
console.log(car.brand)
console.log(car["year"])

let fruits=["onion","apple","orange","banana"]
console.log(fruits)
console.log(fruits[0])
console.log(fruits[3])
fruits.push("grapes")
console.log(fruits)

let moreFruits = fruits

moreFruits.push("strawberry")

console.log(fruits)

