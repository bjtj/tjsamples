require "./simple_number"
require "test/unit"

class TestSimpleNumber < Test::Unit::TestCase
  def setup
    @num = SimpleNumber.new(2)
  end

  def teardown
    # nothing
  end

  def test_add
    assert_equal(4, @num.add(2))
  end

  def test_multiply
    assert_equal(4, @num.multiply(2))
  end
end
