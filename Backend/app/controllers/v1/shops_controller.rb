class V1::ShopsController < ApplicationController
    def index
        @shops = Shop.all 

        render json:@shops, status: :ok
    end

    def create
        @shop = Shop.new(shop_params)
        @shop.save

        render json:@shop, status: :created
    end

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
