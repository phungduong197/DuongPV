class SessionsController < ApplicationController
  def new; end

  def create
    user = User.find_by email: params[:session][:email].downcase
    if user&.authenticate params[:session][:password]
      user_activated user
    else
      flash.now[:danger] = t ".danger"
      render :new
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to root_url
  end
  
  private

  def user_activated user
    if user.activated?
      log_in user
      check_remember user
      redirect_back_or user
    else
      message = (t ".mes")
      flash[:warning] = message
      redirect_to root_url
    end
  end
end
