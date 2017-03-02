module BookKeeping
  VERSION = 5 # Where the version number matches the one in the test.
end

class Gigasecond

  def self.from(date_object)
    new_date = date_object + 1000000000
  end

end

