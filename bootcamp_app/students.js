const { pool } = require('./database-connection');

const myArgs = process.argv.slice(2);
pool.query(`
SELECT students.id, students.name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name lIKE '%${myArgs[0]}%'
LIMIT ${myArgs[1]};
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch(e => console.error('query error', e.stack));