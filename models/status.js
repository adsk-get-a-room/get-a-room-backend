'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    name: DataTypes.STRING,
    isOccupied: DataTypes.BOOLEAN
  }, {});
  Status.associate = function(models) {
    // associations can be defined here
  };
  return Status;
};