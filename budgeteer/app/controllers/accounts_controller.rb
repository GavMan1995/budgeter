class AccountsController < ApplicationController
  def index
    @account = Account.first
  end

  def create
    account = Account.new(account_params)
    if account.save
      render json: account
    else
      render json: { errors: account.error.full_messages }
    end
  end

  def edit

  end

  def update
    account = Account.find(params[:id])
    if account.update(account_params)
      render json: account
    else
      render json: { errors: account.error.full_messages }
    end
  end

  private
    def account_params
      params.require(:account).permit(:total)
    end
end
