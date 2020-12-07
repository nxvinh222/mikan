class V1::ItemQuantitiesController < ApplicationController

    #POST /shops/items
    def addItems
        @item_quantity = ItemQuantity.new(item_quantity_params)
        @item_quantity.sold = 0
        @item_quantity.save
        render json: {
            createSucceed: true,
            message: "Add item succeed",
            admin: V1::SessionsController.current_user
        }
    end

    #PUT /shops/items
    # def editItems
    #     @item_quantity = ItemQuantity.whe
    # end

    private
    def item_quantity_params
        params.require(:item_quantity).permit(:shop_id, :item_id, :quantity)
    end
end
