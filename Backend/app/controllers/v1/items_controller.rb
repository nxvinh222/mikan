class V1::ItemsController < ApplicationController
  #GET /items
  def index
    @items = Item.all 

    render json: @items, status: :ok
  end

  #GET /items/:id
  def show
    @item = Item.where(id: params[:id]).first
    
    if @item != nil
        render json: @item, status: :ok
    else
        head(:unprocessable_entity)
    end
  end
end
