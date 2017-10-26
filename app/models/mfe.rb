class Mfe < ApplicationRecord
 validates :answer, presence: true, numericality: { only_integer: true }
end
