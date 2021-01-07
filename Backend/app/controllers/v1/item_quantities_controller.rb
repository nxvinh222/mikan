class V1::ItemQuantitiesController < ApplicationController

    #POST /shops/items
    def addItems
        @item_quantity = ItemQuantity.new(item_quantity_params)
        @item_quantity.sold = 0
        @item_quantity.save
        render json: {
            createSucceed: true,
            message: "Add item succeed",
            admin: current_user
        }
    end

    #PUT /shops/:id1/items/id2
    def editItems
        @item_quantity = ItemQuantity.where(shop_id: params[:id1], item_id: params[:id2]).first

        if @item_quantity.update(edit_item_quantity_params)
            render json:@item_quantity, status: :ok
        else
            head(:unprocessable_entity)
        end


    end

    private
    def item_quantity_params
        params.require(:item_quantity).permit(:shop_id, :item_id, :quantity)
    end
    private
    def edit_item_quantity_params
        params.require(:item_quantity).permit(:quantity)
    end
end
