class CreateShops < ActiveRecord::Migration[6.0]
  def change
    create_table :shops do |t|
      t.string :shop_name
      t.string :shop_address
      t.string :manager_name
      t.string :manager_phone
      t.string :hotline

      t.timestamps
    end
  end
end
