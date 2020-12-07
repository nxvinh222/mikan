Rails.application.routes.draw do
  # devise_for :users
  namespace :v1 do
    resources :shops
    resources :employees
    resources :sessions , only: [:create, :destroy]
    get '/test', to: 'shops#test'
    get '/shops/:id/items', to: 'shops#getItems'
    post '/shops/items', to: 'item_quantities#addItems'
    get '/shops/:id/employees', to: 'shops#getEmployees'

    resources :items
    post  '/login',   to: 'sessions#create'
    delete  '/logout', to: 'sessions#destroy'

    post '/signup', to: 'users#create'
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
