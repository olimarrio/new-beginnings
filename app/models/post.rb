class Post < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  has_one_attached :banner_photo
  has_one_attached :left_photo
  has_one_attached :right_photo
  extend FriendlyId
  friendly_id :title, use: :slugged
end
