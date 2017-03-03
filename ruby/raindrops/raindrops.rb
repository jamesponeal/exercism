module BookKeeping
  VERSION = 3 # Where the version number matches the one in the test.
end


class Raindrops

  def self.convert(num)
    string = ""
    if num%3 == 0
      string += "Pling"
    end
    if num%5 == 0
      string += "Plang"
    end
    if num%7 == 0
      string += "Plong"
    end
    if string == ""
      string += num.to_s
    end
    string
  end

end


