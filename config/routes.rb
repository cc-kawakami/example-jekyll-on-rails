Rails.application.routes.draw do
  get 'jobs' => 'jobs#index'
  get 'frames/service_status'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
