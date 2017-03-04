class Sieve

  def initialize(limit)
    @limit = limit
    @primes = []
  end

  def primes
    (2..@limit).each { |number| @primes.push(number) if is_prime?(number) }
    @primes
  end

  def is_prime?(n)
    (2..n-1).each { |number| return false if n%number == 0 }
    return true
  end

end


module BookKeeping
  VERSION = 1 # Where the version number matches the one in the test.
end