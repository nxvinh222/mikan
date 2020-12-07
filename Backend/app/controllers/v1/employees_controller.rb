class V1::EmployeesController < ApplicationController

    #GET /employees
    def index
        @employees = Employee.all 

        render json: @employees
    end

    #POST /employees
    def create
        @employee = Employee.new(employee_params)
        @employee.shop_name = @employee.shop.shop_name
        if @employee.save
            render json: @employee, status: :created
        else
            head(:unprocessable_entity)
        end
    end

    #GET /employees/:id
    def show
        @employee = Employee.where(id: params[:id]).first

        if @employee != nil
            render json: @employee, status: :ok
        else
            head(:unprocessable_entity)
        end
    end

    #PUT /employees/:id
    def update
        @employee = Employee.where(id: params[:id]).first

        if @employee.update(employee_params)
            render json: @employee, status: :ok
        else
            head(:unprocessable_entity)
        end
    end

    #DELETE /employees/:id
    def destroy
        @employee = Employee.where(id: params[:id]).first 

        if @employee.destroy
            head(:ok)
        else
            head(:unprocessable_entity)
        end
    end

    private
    def employee_params
        params.require(:employee).permit(:shop_id, :name, :phone, :id_card, :role)
    end

end