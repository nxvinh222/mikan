class V1::ShopsController < ApplicationController
    # /v1


    # Test model association
    # GET /test
    def test
        @shops = Shop.first.item_quantity.first

        render json:@shops, status: :ok
    end
    #############################################
    
    #GET /shops
    def index
        @shops = Shop.all 

        render json:@shops, status: :ok
    end

    #POST /shops
    def create
        @shop = Shop.new(shop_params)
        @shop.save

        render json:@shop, status: :created
    end

    #DELETE /shop/:id
    def destroy
        @shop = Shop.where(id: params[:id]).first
        if @shop.destroy
            head(:ok)
        else
            head(:unprocessable_entity)
        end
    end

    private
    def shop_params
        params.require(:shop).permit(:shop_name, :shop_address, :manager_name, :manager_phone, :hotline)
    end
end
