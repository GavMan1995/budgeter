Rails.application.routes.draw do
  root 'accounts#index'
  resources :expenses

end
