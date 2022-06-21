const Migrations = artifacts.require('Migrations');
const AINFT = artifacts.require('AINFT');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(AINFT);
};
