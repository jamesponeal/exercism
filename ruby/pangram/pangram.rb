class Pangram

  def self.clean_phrase(phrase)
    phrase.delete!(" ")
    phrase.delete!("_")
    phrase.delete!('"')
    phrase.downcase!
    phrase
  end


  def self.pangram?(input)
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    cleaned_phrase = clean_phrase(input)
    cleaned_phrase.each_char do |letter|
      if alphabet.include?(letter)
        alphabet.delete!(letter)
      end
    end
    puts "*************"
    puts "Alphabet: #{alphabet}"
    puts "Cleaned Phrase: #{cleaned_phrase}"
    puts " "
    if alphabet.length == 0
      return true
    else
      return false
    end
  end

end

module BookKeeping
  VERSION = 4 # Where the version number matches the one in the test.
end