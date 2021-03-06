# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
# User.delete_all

# 1000.times do
#  User.create(username: Faker::Internet.username, email: Faker::Internet.email)
#  print '.'
# end

5000.times do
  Task.create(title: Faker::Hipster.sentence, completed: Time.now + rand(5000..5000000), user_id: rand(1..1001))
  print '.'
end
