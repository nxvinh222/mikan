Rails.application.routes.draw do
  # devise_for :users
  namespace :v1 do
    resources :shops
    resources :employees
    resources :sessions , only: [:create, :destroy]
    resources :items
    # resources :users

    get '/test', to: 'shops#test'
    get '/shops/:id/items', to: 'shops#getItems'
    post '/shops/items', to: 'item_quantities#addItems'
    # put '/shops/items', to: 'item_quantities#editItems'
    get '/shops/:id/employees', to: 'shops#getEmployees'
    get 'shops/:id/revenue', to: 'shops#getRevenue'


    post  '/login',   to: 'sessions#create'
    delete  '/logout', to: 'sessions#destroy'

    post '/signup', to: 'users#create'
    put '/change_password', to: 'password_resets#changePassword'
  end
  # post  '/login',   to: 'application#create'
  # delete  '/logout', to: 'application#destroy'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
