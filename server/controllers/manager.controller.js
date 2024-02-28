const Manager = require('../models/manager.model');
module.exports.createManager = (request, response) => {
    Manager.create(request.body)
        .then(manager => response.json(manager))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllManager = (request, response) => {
  Manager.find({})
      .then(manager => {
          console.log(manager);
          response.json(manager);
      })
      .catch(err => {
          console.log(err)
          response.json(err)
      })
}

module.exports.deleteManager = (request, response) => {
    Manager.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.updateManager = (request, response) => {
    Manager.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedManager => response.json(updatedManager))
        .catch(err => response.json(err))
}




