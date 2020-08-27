users = [
    {
        email: "test@test.com",
        password: "123456",
        password_confirmation: "123456"
    }
]

users.each do |attribute|
    User.create attribute
end

apartments = [
    {
        apartment_name: "Kelbi",
        street: "123 Hill St",
        city: "San Diego",
        state: "CA",
        manager: "Joe",
        email: "joe@test.com",
        price: "1000",
        bedrooms: 2,
        bathrooms: 2,
        pets: "yes"
    },
    {
        apartment_name: "Doomoo",
        street: "123 Hill St",
        city: "San Diego",
        state: "CA",
        manager: "Jan",
        email: "joe@test.com",
        price: "2000",
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes"
    }
]

test_user = User.where(email: "test@test.com").first

apartments.each do |attribute|
    test_user.apartments.create attribute
end