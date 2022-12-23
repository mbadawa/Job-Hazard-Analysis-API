import { Sequelize, DataTypes, ARRAY } from 'sequelize';
const sequelize = new Sequelize('JHAReport', 'root', '112233445566', {
  dialect: 'mysql',
});

const CreateJHASchema = sequelize.define('report', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fullName: {
    type: DataTypes.STRING,
  },
  superVisorName: {
    type: DataTypes.STRING,
  },
  companyName: {
    type: DataTypes.STRING,
  },
  projectName: {
    type: DataTypes.STRING,
  },
  projectDate: {
    type: DataTypes.DATE,
  },
  operation: {
    type: DataTypes.STRING,
  },
  departmentOrUnit: {
    type: DataTypes.STRING,
  },
  location: {
    type: DataTypes.STRING,
  },
  indoorOrOutdoor: {
    type: DataTypes.STRING,
  },
  trainingRequired: {
    type: DataTypes.STRING,
  },
  equipmentUsed: {
    type: DataTypes.STRING,
  },
  chemicalsUsed: {
    type: DataTypes.STRING,
  },
  additionalComments: {
    type: DataTypes.STRING,
  },
  employees: {
    type: DataTypes.JSON,
  },
  analysis: {
    type: DataTypes.JSON,
  },
});
CreateJHASchema.sync()
  .then((data) => {
    console.log('Table and model synced');
  })
  .catch((err) => {
    console.log(err.message);
  });
export default CreateJHASchema;
