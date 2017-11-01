Rails.application.routes.draw do

  get 'pages/home'

  devise_for :users
  root to: 'pages#home'
  namespace :api, default: {format: :json} do
    resources :mves, only: [:show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
