class CreateRevenues < ActiveRecord::Migration[6.0]
  def change
    create_table :revenues do |t|
      t.integer :shop_id, :primary_key
      t.integer :item_id
      t.integer :quantity

      t.timestamps
    end
  end
end
