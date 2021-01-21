class AddBodyPart2ToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :body_part_two, :text
  end
end
