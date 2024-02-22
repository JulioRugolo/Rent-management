import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';

import Team from './team.model';

class MatchModel extends Model<InferAttributes<MatchModel>, InferCreationAttributes<MatchModel>> {
  declare id: CreationOptional<number>;
  declare homeTeamId: CreationOptional<number>;
  declare homeTeamGoals: CreationOptional<number>;
  declare awayTeamId: CreationOptional<number>;
  declare awayTeamGoals: CreationOptional<number>;
  declare inProgress: CreationOptional<boolean>;
}

MatchModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_id',
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_id',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  tableName: 'matches',
});

MatchModel.belongsTo(Team, { foreignKey: 'homeTeamId', as: 'homeTeam' });
MatchModel.belongsTo(Team, { foreignKey: 'awayTeamId', as: 'awayTeam' });

Team.hasMany(MatchModel, { foreignKey: 'homeTeamId', as: 'homeMatch' });
Team.hasMany(MatchModel, { foreignKey: 'awayTeamId', as: 'awayMatch' });

export default MatchModel;
