class ProductSerializer < ActiveModel::Serializer
  attributes :id, :"name,", :"description,", :"image,", :"origin,", :"cost,", :"average_raiting,", :category_id
end
