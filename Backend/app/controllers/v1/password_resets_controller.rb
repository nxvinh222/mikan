class V1::PasswordResetsController < ApplicationController


    def changePassword
        @user = User.where(username: params[:username]).first
        if @user.update(reset_passwords_params)
            render json:{
                succeed: @user
            }
        end


    end

    private
    def reset_passwords_params
        params.permit(:username, :password, :password_confirmation)
    end
    
end
