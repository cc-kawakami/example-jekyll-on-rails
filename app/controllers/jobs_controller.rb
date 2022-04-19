class JobsController < ApplicationController
  def index
    @jobs = ['job1', 'job2', 'job3']
  end
end
