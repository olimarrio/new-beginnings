Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'pages/about'
  get 'pages/contact'
  get 'pages/recruitment'
  get 'pages/sales'
  get 'pages/human_hr'
  get 'pages/risk'
  get 'pages/candidate'
  get 'pages/thanks'
  resources :contacts, only: [:new, :create]
  resources :posts
  get '*path' => redirect("/")
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
