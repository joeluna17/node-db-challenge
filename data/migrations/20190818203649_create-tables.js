
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('id');   
        tbl.text('projectName',128)
        .notNullable();
        tbl.text('projectDescription',128);
        tbl.boolean('projectCompleted')
        .notNullable()
        .defaultTo(false);
        
    })
    .createTable('resources', tbl => {
        tbl.increments('id');
        tbl.text('resourceName',128)
        .notNullable();
        tbl.text('recourceDescription', 128);
        
    })
    .createTable('task', tbl => {
        tbl.increments('id');
        tbl.text('taskDescription',128)
        .notNullable();
        tbl.text('taskNotes', 128);
        tbl.boolean('taskCompleted')
        .notNullable()
        .defaultTo(false);
        tbl.integer('projectID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('project_resources', tbl => {
        tbl.increments('id');
        tbl.integer('projectID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.integer('resourceID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('task')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};
