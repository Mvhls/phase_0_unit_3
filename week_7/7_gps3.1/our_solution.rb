# U3.W7: Build an Electronic Grocery List!
 
# Your full names:
# 1. Jonathan Howden
# 2.
 
# User Stories (As many as you want. Delete the statements you don't need)
# As a user, I want to add groceries and items to a list
# As a user, I want to be able to look at the list
# As a user, I want to be able to remove items from the grocery list
# As a user, I want to update the list with quantities
# As a user, I want to 
 
# Pseudocode
# define a class called grocery_list
# define a method called initialize
# create an instance variable called @list and set equal to an empty hash

# define method add_items with two arguments, item and quantity
# add item and quantity to the @list hash

# create a method called remove_item with one argument called item
# remove the item from the list

# create a method called update with two arguments item and quantity
# updates the existing list with the quantitiy

# create a method called display
# displays list
 
 
# Your fabulous code goes here....


class GroceryList
    def initialize
#        @list = {}
         @list = []
    end
    def add_item(item)
        @list.push(item)
    end
    def display
       return @list 
       # return a sentence that looks like: '<Item name> with a quantity of: <Item quantity>'"
    end
    def remove_item(item)
        @list.delete(item)
    end
    def update(item, quantity)
        if @list.include? item
            @list[item] = quantity
        else
            "Item not on list."
        end
    end
end

class Item
  #what do attr_readers do and how can you use them to solve the above?
  #move on to attr_writers/accessors
    def initialize(item, quantity)
        @item = item
        @quantity = quantity
    end
end


# DRIVER CODE GOES HERE. 
list = GroceryList.new
carrots = Item.new("carrots", 4)
puts carrots.class == Item
list.add_item(carrots)
puts list.display
=begin 
puts list.class == GroceryList
list.add_item("carrots", 3)
list.add_item("peas", 4)
puts list.display == {"carrots" => 3, "peas" => 4}
list.remove_item("carrots")
puts list.display == {"peas" => 4}
puts list.update("carrots", 4) == "Item not on list."
list.update("peas", 6)
puts list.display == {"peas" => 6}
=end