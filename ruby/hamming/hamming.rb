class Hamming

  def self.compute(dna1, dna2)
    array1 = dna1.split("")
    array2 = dna2.split("")
    count = 0
    i = 0
    if array1.length == array2.length
      while i < array1.length
        if array1[i] != array2[i]
          count += 1
        end
        i += 1
      end
    else
      raise ArgumentError.new("Different lengths not allowed!")
    end
    return count
  end

end

module BookKeeping
  VERSION = 3 # Where the version number matches the one in the test.
end