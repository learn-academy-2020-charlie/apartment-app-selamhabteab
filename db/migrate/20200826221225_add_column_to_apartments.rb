class AddColumnToApartments < ActiveRecord::Migration[6.0]
  def change
    add_column :apartments, :apartment_name, :string
  end
end
