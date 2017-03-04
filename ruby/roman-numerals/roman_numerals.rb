module ToRoman

  def self.convert_to_roman(number)
    roman_hash = {
      1000 => "M",
      900 => "CM",
      500 => "D",
      400 => "CD",
      100 => "C",
      90 => "XC",
      50 => "L",
      40 => "XL",
      10 => "X",
      9 => "IX",
      5 => "V",
      4 => "IV",
      1 => "I"
    }
    roman_num = ""
    roman_hash.each do |key, value|
      while number - key >= 0
        roman_num << value
        number -= key
      end
    end
    roman_num
  end

end

class Integer
  def to_roman
    ToRoman.convert_to_roman(self)
  end
end

module BookKeeping
  VERSION = 2 # Where the version number matches the one in the test.
end