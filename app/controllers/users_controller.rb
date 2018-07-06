class UsersController < ApplicationController
  before_action :logged_in_user, except: [:index, :update, :destroy]
  before_action :correct_user, only: [:edit, :update]
  before_action :admin_user, only: :destroy
  before_action :find_id, only: [:show, :update, :destroy]
  
  def index
    @users = User.paginate page: params[:page], per_page: Settings.limit
  end

  def show
    return if @user
    flash[:success] = t ".err"
    redirect_to root_url
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      log_in @user
      flash[:success] = t ".success"
      redirect_to @user
    else
      render :new
    end
  end

  def update
    if @user.update_attributes user_params
      flash[:success] = t ".success"
      redirect_to @user
    else
      render :edit
    end
  end

  def destroy
    if @user.destroy
      flash[:success] = t ".success"
      redirect_to users_url
    else
      flash[:danger] = t ".fail"
      redirect_to users_url
    end
  end

  private

  def user_params
    params.require(:user).permit :name, :email, :password,
      :password_confirmation
  end

  def logged_in_user
    return if logged_in?
    store_location
    flash[:danger] = t ".ple"
    redirect_to login_url
  end

  def correct_user
    @user = User.find_by id: params[:id]
    redirect_to root_url unless current_user? @user
  end

  def admin_user
    redirect_to root_url unless current_user.admin?
  end

  def find_id
    @user = User.find_by id: params[:id]
    return if @user
    flash[:danger] = t ".fail"
    redirect_to home_url
  end
end
