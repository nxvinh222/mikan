class V1::ItemQuantitiesController < ApplicationController
    #POST /shops/items
    def addItems
        @item_quantity = ItemQuantity.where(
            shop_id: params[:shop_id],
            item_id: params[:item_id]
        )
        if @item_quantity != nil
            render json: {
                createSucceed: false,
                message: "Item already exist"
            }
        else
            @item_quantity = ItemQuantity.new(item_quantity_params)
            @item_quantity.sold = 0
            @item_quantity.save
            render json: {
                createSucceed: true,
                message: "Add item succeed"
            }
        end
    end
    private
    def item_quantity_params
        params.require(:item_quantity).permit(:shop_id, :item_id, :quantity)
    end
end
