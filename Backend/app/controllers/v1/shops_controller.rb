class V1::ShopsController < ApplicationController
    # /v1


    # Test model association
    # GET /test
    def test
        @shops = Shop.first.employee

        render json:@shops, status: :ok
    end
    #############################################
    
    #GET /shops
    def index
        @shops = Shop.all 

        render json:@shops, status: :ok
    end

    #GET /shops/:id
    def show
        @shop = Shop.where(id: params[:id]).first
        
        if @shop != nil
            render json:@shop, status: :ok
        else
            head(:unprocessable_entity)
        end
    end

    #POST /shops
    def create
        @shop = Shop.new(shop_params)
        @shop.save

        render json:{
            id: @shop.id,
            shop_name: @shop.shop_name,
            shop_address: @shop.shop_address,
            manager_name: @shop.manager_name,
            manager_phone: @shop.manager_phone,
            hotline: @shop.hotline
        }, status: :created
    end

    #PUT /shops/:id
    def update
        @shop = Shop.where(id: params[:id]).first

        if @shop.update(shop_params)
            render json:@shop, status: :accepted
        else
            head(:unprocessable_entity)
        end
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

    #GET /shops/:id/items
    def getItems
        @shop = Shop.where(id: params[:id]).first
        @item_quantity = @shop.item_quantity

        @items = @item_quantity.map{|item_quantity|
            item = item_quantity.item
            {
                id: item.id,
                item_name: item.item_name,
                price: item.price,
                description: item.description,
                quantity: item_quantity.quantity,
                sold: item_quantity.sold
            }
        }

        render json: @items, status: :ok
    end


    #GET /shops/:id/employees
    def getEmployees
        @shop = Shop.where(id: params[:id]).first
        @employees = @shop.employee

        render json: @employees
    end

    #GET /shops/:id/revenue
    def getRevenue
        @shop = Shop.where(id: params[:id]).first
        @revenue = @shop.item_quantity
        @revenue = @revenue.map{|revenue|
            {   
                shop_id: revenue.shop_id,
                item_id: revenue.item_id,
                sold: revenue.sold
            }
        }

        render json: @revenue
    end

    private
    def shop_params
        params.require(:shop).permit(:shop_name, :shop_address, :manager_name, :manager_phone, :hotline)
    end

end
