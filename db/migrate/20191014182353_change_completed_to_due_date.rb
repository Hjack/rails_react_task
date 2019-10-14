class ChangeCompletedToDueDate < ActiveRecord::Migration[5.2]
  def change
    rename_column :tasks, :completed, :due_date
  end
end
