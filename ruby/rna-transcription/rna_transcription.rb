module BookKeeping
  VERSION = 4 # Where the version number matches the one in the test.
end


class Complement

  def self.of_dna(input_code)
    if input_code.match(/[^GCTA]/)
      return ''
    else
      input_code.tr("GCTA","CGAU")
    end
  end

end



