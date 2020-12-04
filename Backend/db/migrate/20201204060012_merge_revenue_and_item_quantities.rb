class MergeRevenueAndItemQuantities < ActiveRecord::Migration[6.0]
  def change
    drop_table :revenues
    add_column :item_quantities, :sold, :integer
  end
end
