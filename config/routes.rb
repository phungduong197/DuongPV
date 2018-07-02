Rails.application.routes.draw do
  root "static_pages#home"
  get "/about", to: "static_pages#about"
  get "/contract", to: "static_pages#contract"
  get "/help", to: "static_pages#help"
  get "/signup", to: "users#new"
end
