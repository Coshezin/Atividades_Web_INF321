defmodule BirdCount do
  def today([]) do
    nil
  end

  def today([_head | tail]) do
    _head
  end
  

  def increment_day_count([]) do
    [1]
  end

  def increment_day_count([_head | tail]) do
    [_head + 1| tail]
  end

  def has_day_without_birds?([]) do
    false
  end

  def has_day_without_birds?([_head | tail]) when _head == 0 do
    true
  end

  def has_day_without_birds?([_head | tail]) when _head != 0 do
    has_day_without_birds?(tail)
  end

  def total([]) do
    0
  end

  def total([_head | tail]) do
    _head + total(tail)
  end

  def busy_days([]) do
    0
  end

  def busy_days([_head | tail]) when _head >= 5 do
    1 + busy_days(tail)
  end

  def busy_days([_head | tail]) when _head < 5 do
    0 + busy_days(tail)
  end

  
end
