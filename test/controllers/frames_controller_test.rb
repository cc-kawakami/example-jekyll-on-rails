require "test_helper"

class FramesControllerTest < ActionDispatch::IntegrationTest
  test "should get service-status" do
    get frames_service-status_url
    assert_response :success
  end
end
