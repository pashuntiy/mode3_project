class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :origin, :cost, :average_rating, :category_id
end
