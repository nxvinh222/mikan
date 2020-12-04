class Shop < ApplicationRecord
    has_many :item_quantity
    has_many :employee
    has_many :revenue

end
