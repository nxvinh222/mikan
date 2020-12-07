# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Shop.create!(
    shop_name:  "Peak Sword",
    shop_address: "So 5 Atlantis",
    manager_name: "Zues",
    manager_phone: "012345",
    hotline: "09876"
)

Item.create!(
    item_name: "Long Sword",
    price: "1000",
    description: "Strong long sword made by black steel."
)

Item.create!(
    item_name: "Wood Bow",
    price: "1100",
    description: "A Good bow made."
)

ItemQuantity.create!(
    shop_id: 1,
    item_id: 1,
    quantity: 10,
    sold: 59
)

ItemQuantity.create!(
    shop_id: 1,
    item_id: 2,
    quantity: 15,
    sold: 30
)

Employee.create!(
    shop_id: 1,
    name: "Nam",
    phone: "123",
    id_card: "567",
    role: "maid",
    shop_name: "Peak Sword"
)

Employee.create!(
    shop_id: 1,
    name: "Tuan",
    phone: "456",
    id_card: "789",
    role: "cash",
    shop_name: "Peak Sword"
)

User.create!(
    username: "admin",
    password: "123456",
    shop_id: 9999,
    admin: true
)

User.create!(
    username: "manager",
    password: "123456",
    shop_id: 1,
    admin: false
)