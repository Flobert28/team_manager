const ManagerController = require('../controllers/manager.controller');
module.exports = (app) => {
    app.post('/api/players', ManagerController.createManager);
    app.get('/api/players', ManagerController.getAllManager); 
    app.delete('/api/players/:id', ManagerController.deleteManager);
    app.patch('/api/players/:id', ManagerController.updateManager);
}

