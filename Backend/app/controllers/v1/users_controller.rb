class V1::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user.admin = false
        @user.save

        render json: @user
    end


    private
    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation, :shop_id)
    end
    
end
