Rails.application.routes.draw do
  devise_for :users
  namespace :v1 do
    resources :shops
    resources :sessions , only: [:create, :destroy]
    get '/test', to: 'shops#test'
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
