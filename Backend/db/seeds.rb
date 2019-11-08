# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


guns = Category.create(name: 'Guns')
shotgun = Product.create(name: 'Shotgun', description: "Srapnel", image: 'some url', origin: 'Morocco', cost: 100, average_raiting: 0, category_id: guns.id)


organs = Category.create(name: "Organs")




drugs = Category.create(name: "Drugs")




animals = Category.create(name: "Animals")
