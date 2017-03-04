class Pangram

  def self.pangram?(input)
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    input.delete!(" ","_",'"')
    input.downcase!
    input.each_char { |letter| alphabet.delete!(letter) }
    return true if alphabet.length == 0
    return false if alphabet.length > 0
  end

end

module BookKeeping
  VERSION = 4 # Where the version number matches the one in the test.
end