class MvesController < ApplicationController
  before_action :set_mfe, only:[:show]

  def index
    @mfes = Mfe.all
  end

  def show
  end


  def new
    @mfe = Mfe.new
  end

  def create
    @mfe = Mfe.new(params[:mfe])
    @mfe.save
    redirect_to mfe_path(@mfe)
  end

  private

  def mfe_params
    params.require(:mfe).permit(:intro, :learn, :question1, :option1, :option2, :answer, :rulefr, :ruleen, :expfr1, :expfr2, :expfr3, :expfr4, :expfr5, :expen1, :expen2, :expen3, :expen4, :expen5, :question2, :color)
  end

  def set_mfe
    @mfe = Mfe.find(params[:id])
  end

end
