class V1::SessionsController < ApplicationController
  include SessionsHelper

	def create
    user = User.where(username: params[:session][:username]).first
    if user && user.authenticate(params[:session][:password])
      # Log the user in and redirect to the user's show page.
      # session[:user_id] = user.id
      log_in(user)
			render json: {
        loginSuccess: true,
        username: user.username,
        admin: user.admin,
        shop_id: user.shop_id,
        message: "Login success"
      }, status: :ok
    else
      # Create an error message.
      render json: {
        loginSuccess: false,
        message: "Invalid username or password"
      }, status: :ok
    end
  end

  def destroy
    session.delete(:user_id)
  end
end