db = db.getSiblingDB('operators');
db.createUser({
    user: 'application_user',
    pwd: 'application_pass',
    roles: [
      {
        role: 'dbOwner',
        db: 'operators',
      },
    ],
  });
  db.createCollection('todos');