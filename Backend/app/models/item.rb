class Item < ApplicationRecord
    has_many :revenue
    has_many :item_quantity, dependent: :delete_all
end
