class Product < ApplicationRecord
  include ActionView::Helpers::NumberHelper
  belongs_to :category
  has_many :reviews


  def averageRating
    length = self.reviews.length
    summ = self.reviews.map {|review| review.rating}.sum
    self.average_rating = summ.to_f/length
  end


end
