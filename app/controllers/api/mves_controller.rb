class Api::MvesController < ApplicationController
  def show
      @mfe = Mfe.find(params[:id])
  end
end
