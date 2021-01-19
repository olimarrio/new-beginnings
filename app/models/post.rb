class Post < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  has_one_attached :banner_photo

  extend FriendlyId
  friendly_id :title, use: :slugged
end
