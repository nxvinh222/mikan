class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.integer :shop_id
      t.string :name
      t.string :phone
      t.string :id_card
      t.string :role

      t.timestamps
    end
  end
end
