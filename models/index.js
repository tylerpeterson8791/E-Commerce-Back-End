const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});


Category.hasMany(Product, {
  foreignKey: 'category_id'
});


Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'students_taught'
});

Tag.belongsToMany(Product, {
  through: {
    model: PriceTag,
    unique: false
  },
  as: 'teachers_assigned'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


// Products belongToMany Tags (through ProductTag) - DONE
// Tags belongToMany Products (through ProductTag) - DONE
// Products belongsTo Category - DONE
// Categories have many Products - DONE