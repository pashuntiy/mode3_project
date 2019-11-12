class ProductsController < ApplicationController

    def index
        products = Product.all
        render json: products
    end

    def show
        product = Product.find(params[:id])
        product.averageRating
        render json: product
    end

    def update
        product = Product.find(params[:id])
        # product.averageRating
        product.update(product_average)
        render json: product
    end

    def create
        product = Product.create(product_params)
        render json: product
    end

    private

    def product_average
        params.require(:product).permit(:average_rating)
    end

    def product_params
        params.require(:product).permit(:name, :description, :origin, :image, :cost, :category_id)
    end
end
