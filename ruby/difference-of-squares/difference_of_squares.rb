class Squares

  def initialize(n)
    @n = n
  end

  def sum_of_squares
    sum = 0
    (1..@n).each do |num|
      sum += (num**2)
    end
    sum
  end

  def square_of_sum
    sum = 0
    (1..@n).each do |num|
      sum += num
    end
    sum**2
  end

  def difference
    diff = sum_of_squares - square_of_sum
    diff.abs
  end

end

module BookKeeping
  VERSION = 3 # Where the version number matches the one in the test.
end

