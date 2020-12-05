class V1::ItemsController < ApplicationController
  #GET /items
  def index
    @items = Item.all 

    render json: @items, status: :ok
  end

  #GET /items/:id
  def show
    @item = Item.find(params[:id])
    
    if @item != nil
      render json: @item, status: :ok
    else
      head(:unprocessable_entity)
    end
  end

  #POST /items
  def create
    @item = Item.new(item_params)
    @item.save

    render json: @item, status: :created
  end

  #PUT /items/:id
  def update
    @item = Item.find(params[:id])

    if @item.update(item_params)
      render json: @item, status: :accepted
    else
      head(:unprocessable_entity)
    end
  end

  #DELETE /items/:id
  def destroy
    @item = Item.find(params[:id])

    if @item.destroy      
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  private
  def item_params
    params.require(:item).permit(:item_name, :price, :description)
  end
end
