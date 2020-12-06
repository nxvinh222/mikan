class V1::SessionsController < ApplicationController
	def create
    user = User.where(username: params[:session][:username]).first
    if user && user.authenticate(params[:session][:password])
      # Log the user in and redirect to the user's show page.
			session[:user_id] = user.id
			render json: user, status: :ok
    else
      # Create an error message.
    end
  end

  def destroy
    session.delete(:user_id)
  end
end