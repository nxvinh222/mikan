class AddShopNameToEmployees < ActiveRecord::Migration[6.0]
  def change
    add_column :employees, :shop_name, :string
  end
end
