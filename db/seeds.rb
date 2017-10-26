# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Cleaning database...'
Mfe.destroy_all

puts 'Loading YAML mfe.yml'
mfes = YAML::load_file("data/mfe.yml")
puts 'Fetching values into array'
mfes_content_array = []
mfes_content_array = mfes.values

puts 'Creating MFEs...'
mfes_content_array.each { |hash|
  Mfe.create!(hash)
}

puts 'Finished!'
