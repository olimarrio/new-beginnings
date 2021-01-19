class Post < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  has_one_attached :banner_photo
end
