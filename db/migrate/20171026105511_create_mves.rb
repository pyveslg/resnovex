class CreateMves < ActiveRecord::Migration[5.1]
  def change
    create_table :mves do |t|
      t.string :intro
      t.string :learn
      t.string :question1
      t.string :option1
      t.string :option2
      t.integer :answer
      t.string :rulefr
      t.string :ruleen
      t.string :expfr1
      t.string :expen1
      t.string :expfr2
      t.string :expen2
      t.string :expfr3
      t.string :expen3
      t.string :expfr4
      t.string :expen4
      t.string :expfr5
      t.string :expen5
      t.string :question2
      t.string :color

      t.timestamps
    end
  end
end
