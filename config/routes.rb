Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'pages/about'
  get 'pages/contact'
  get 'pages/recruitment'
  get 'pages/sales'
  get 'pages/human_hr'
  get 'pages/risk'
  resources :contacts, only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
