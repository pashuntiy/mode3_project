class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :"text,", :"author,", :"raiting,", :product_id
end
