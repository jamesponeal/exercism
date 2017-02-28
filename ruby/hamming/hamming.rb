module BookKeeping
  VERSION = 3 # Where the version number matches the one in the test.
end

class Hamming

  def self.compute(a, b)

    count = 0
    i = 0
    if a.length == b.length
      for i in 0..a.length
        if a[i] != b[i]
          count += 1
        end
      end
    else
      raise ArgumentError.new("Different lengths not allowed!")
    end
    count
  end

end

