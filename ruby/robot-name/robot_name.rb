class Robot

  attr_reader :name

  @@used_names = []

  def initialize
    @name = get_valid_name
    @@used_names << @name
  end

  def get_valid_name
    name = build_new_name
    @@used_names.include?(name) ? get_valid_name : name
  end

  def build_new_name
    name = ('A'..'Z').to_a[rand(26)]
    name += ('A'..'Z').to_a[rand(26)]
    3.times { name += rand(10).to_s }
    name
  end

  def reset
    @name = get_valid_name
    @@used_names << @name
  end

end

module BookKeeping
  VERSION = 2 # Where the version number matches the one in the test.
end