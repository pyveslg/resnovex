Rails.application.routes.draw do

  devise_for :users
  root to: 'pages#home'
  namespace :api, defaults: {format: :json} do
    resources :mves, only: [:index, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
