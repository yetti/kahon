class PagesController < ApplicationController
  def home
    now = Time.zone.now
    render json: {now: now}
  end
end
