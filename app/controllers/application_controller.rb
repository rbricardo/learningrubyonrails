class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_filter :configure_premitted_paramaters, if: :devise_controller?

  protected
  def  configure_premitted_paramaters
  	devise_paramater_sanitizer.for(:sign_up) {|u| u.permit(:name, :stripe_card_token, 
  		:email, :password, :password_confirmation)}  	
  end
end
