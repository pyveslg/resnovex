class Api::MvesController < ApplicationController
  def index
    @mves = Mfe.all
  end

  def show
    @mfe = Mfe.find(params[:id])
  end
end
