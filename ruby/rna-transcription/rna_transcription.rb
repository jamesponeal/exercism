module BookKeeping
  VERSION = 4 # Where the version number matches the one in the test.
end


class Complement

  def self.convert_letter(letter)
    case letter
    when 'G'
      new_letter = 'C'
    when 'C'
      new_letter = 'G'
    when 'T'
      new_letter = 'A'
    when 'A'
      new_letter = 'U'
    else
      new_letter = ''
    end
    new_letter
  end

  def self.of_dna(input_code)
    code_array = input_code.split("")
    new_code = ""
    code_array.each do |letter|
      new_code += convert_letter(letter)
    end
    if input_code.length == new_code.length
      new_code
    else
      return ''
    end
  end

end



